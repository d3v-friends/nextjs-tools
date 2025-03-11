"use server";
import exec from "src/func/graphql/exec";
import {Document} from "src/func/graphql/types";

export default async function <TResult, TVariables>(
	query: Document<TResult, TVariables>,
	header?: Record<string, string>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
	return exec({
		query,
		header,
		variables,
	});
}
