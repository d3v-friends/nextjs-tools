"use server";
import exec from "./exec";
import {Document, Header, QueryResult} from "./types";

export default async function <TResult, TVariables>(
	host: string,
	query: Document<TResult, TVariables>,
	header?: Header,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<QueryResult<TResult>> {
	try {
		return {
			data: await exec({
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
