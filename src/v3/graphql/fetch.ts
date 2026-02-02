"use server";
import {Document, GraphqlError, GraphqlResponse, Header} from "../..";

export type FetchArgs<TResult, TVariables> = {
	host: string;
	query: Document<TResult, TVariables>;
	header?: Header;
	variables?: TVariables;
};

export default async function <TResult, TVariables>(args: FetchArgs<TResult, TVariables>): Promise<TResult> {
	args.header = args.header || {};
	args.header["Content-Type"] = "application/json";

	const body = {
		method: "POST",
		headers: args.header,
		body: JSON.stringify({
			query: toString(args.query),
			variables: args.variables,
		}),
	};

	const response = await fetch(args.host, body);
	const res: GraphqlResponse<TResult> = await response.json();

	switch (response.status) {
		case 200:
			if (!res.data) {
				throw new Error(`empty_data: value=${JSON.stringify(res)}`);
			}

			return res.data;
		default:
			if (res.errors) {
				throw new Error((res as GraphqlError).errors[0].message);
			}
			throw new Error(`unexpected_graphql_error: value=${JSON.stringify(res)}`);
	}
}

function toString<TResult, TVariables>(value: Document<TResult, TVariables>): string {
	const query = value.toString();
	if (Array.isArray(query)) {
		return query.join("");
	}
	return query;
}
