"use server";
import {fnCookies, fnEnv} from "index";
import {Document, errEmptyGraphqlResponse, errUnexpectedGraphqlError} from "func/graphql/types";

const envHost = "GQL_HOST";

type ExecArgs<TResult, TVariables> = {
	header?: Record<string, string>;
	query: Document<TResult, TVariables>;
	variables?: TVariables;
};

type GqlErrorResponse = {
	errors: {
		message: string;
		path: string[];
	}[];
	data: unknown;
};

export default async function <TResult, TVariables>(args: ExecArgs<TResult, TVariables>): Promise<TResult> {
	// todo 클라이언트 컴포넌트에서 쿼리를 불러오면 array 로 넘어오는 문제가 있는데 원인을 밝히지 못함.추후 알아보기
	let query = args.query.toString();

	if (args.query instanceof Array) {
		query = "";
		for (let str of args.query) {
			query = `${query}${str}`;
		}
	}

	const body = {
		method: "POST",
		headers: await fnCookies.newHeader(args.header),
		body: JSON.stringify({
			query,
			variables: args.variables,
		}),
	};

	const response = await fetch(await fnEnv.server.string(envHost), body);

	switch (response.status) {
		case 200:
			const res: any = await response.json();
			console.log("fetch_success", body, JSON.stringify(res));

			if (res.hasOwnProperty("errors")) {
				throw new Error((res as GqlErrorResponse).errors[0].message);
			}

			if (!res.hasOwnProperty("data")) {
				throw new Error(`${errEmptyGraphqlResponse}: value=${JSON.stringify(res)}`);
			}

			return res.data;
		default:
			console.log("fetch_failed", body);
			throw new Error(`${errUnexpectedGraphqlError}: value=${JSON.stringify(response)}`);
	}
}
