"use server";
import exec from "./exec";
import {TypedDocumentString} from "./types";

export default async function <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	header?: Record<string, string>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
	return exec({
		query,
		header,
		variables,
	});
}
