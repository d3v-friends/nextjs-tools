"use server";
import exec from "./exec";
import {Document} from "./types";

export default async function <TResult, TVariables>(
	host: string,
	query: Document<TResult, TVariables>,
	header?: Record<string, string>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
	return exec({
		host,
		query,
		header,
		variables,
	});
}
