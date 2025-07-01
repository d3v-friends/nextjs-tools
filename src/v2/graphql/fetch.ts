import {Document, errEmptyGraphqlResponse, errUnexpectedGraphqlError, GraphqlError, Header} from "@root";

type Args<TResult, TVariables> = {
	host: string;
	header?: Header;
	query: Document<TResult, TVariables>;
	variables?: TVariables;
};

export default async function <TResult, TVariables>(args: Args<TResult, TVariables>): Promise<TResult> {
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
		headers: args.header,
		body: JSON.stringify({
			query,
			variables: args.variables,
		}),
	};

	const response = await fetch(args.host, body);

	switch (response.status) {
		case 200:
			const res: any = await response.json();
			if (res.hasOwnProperty("errors")) {
				throw new Error((res as GraphqlError).errors[0].message);
			}

			if (!res.hasOwnProperty("data")) {
				throw new Error(`${errEmptyGraphqlResponse}: value=${JSON.stringify(res)}`);
			}

			return res.data;
		default:
			throw new Error(`${errUnexpectedGraphqlError}: value=${JSON.stringify(response)}`);
	}
}
