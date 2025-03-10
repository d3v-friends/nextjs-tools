"use server";
import exec from "func/graphql/exec";
import {Document} from "func/graphql/types";

export default async function <TResult, TVariables>(
	query: Document<TResult, TVariables>,
	header?: Record<string, string>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<{result: TResult; error?: Error}> {
	try {
		return {
			result: await exec({
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
