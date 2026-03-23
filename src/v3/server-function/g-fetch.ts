"use server";

export interface Options {
	host: string;
	header: Record<string, string>;
}

export type Response<TResult> = [TResult, string | null];

export default async function <TResult, TVariables>(
	query: Document<TResult, TVariables>,
	variables: TVariables,
	opt: Partial<Options> = {}
): Promise<Response<TResult>> {
	opt.host = opt.host || process.env.GRAPHQL_HOST || ".";

	opt.header = opt.header || {};
	opt.header["Content-Type"] = "application/json";

	try {
		const response = await fetch(opt.host, {
			method: "POST",
			headers: opt.header,
			body: JSON.stringify({
				query: query.toString(),
				variables,
			}),
		});

		const body = (await response.json()) as GraphqlResponse<TResult>;

		if (body.errors) {
			return [null as TResult, body.errors[0].message];
		}

		if (!body.data) {
			return [null as TResult, "empty_body"];
		}

		return [body.data, null];
	} catch (e) {
		if (e instanceof Error) {
			return [null as TResult, e.message];
		}

		return [null as TResult, JSON.stringify(e)];
	}
}

interface DocumentTypeDecoration<TResult, TVariables> {
	__apiType?: (variables: TVariables) => TResult;
}

interface Document<TResult, TVariables> {
	toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}

type GraphqlResponse<TResult> = {
	data?: TResult;
	errors?: {
		message: string;
		path: string[];
	}[];
};
