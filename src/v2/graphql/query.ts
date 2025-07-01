import {Document, Header, QueryResult} from "@root";
import fetch from "./fetch";

export default async function <TResult, TVariables>(
	host: string,
	query: Document<TResult, TVariables>,
	header?: Header,
	variables?: TVariables
): Promise<QueryResult<TResult>> {
	try {
		return {
			data: await fetch({
				host,
				query,
				header,
				variables,
			}),
		};
	} catch (e) {
		return {
			data: null as TResult,
			error: e instanceof Error ? e : new Error(JSON.stringify(e)),
		};
	}
}
