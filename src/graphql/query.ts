"use server";
import exec from "./exec";
import {Document} from "./types";

export default async function <TResult, TVariables>(
	host: string,
	query: Document<TResult, TVariables>,
	header?: Record<string, string>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<{result: TResult; error?: Error}> {
	try {
		return {
			result: await exec({
				host,
				query,
				header,
				variables,
			}),
		};
	} catch (e) {
		return {
			result: null as TResult,
			error: e instanceof Error ? e : new Error(JSON.stringify(e)),
		};
	}
}
