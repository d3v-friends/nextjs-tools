"use server";
import {TypedDocumentString} from "@func/graphql/types";
import exec from "./exec";

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
