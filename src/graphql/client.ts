"use server";
import fnExec from "./exec";
import {Document, GraphQLClient, Header} from "./types";

export default async function (host: string, header?: Header): Promise<GraphQLClient> {
	header = header || {};
	const c: GraphQLClient = {
		host,
		header,
		appendHeader(v: Header): GraphQLClient {
			return {
				...this,
				header: {
					...this.header,
					...v,
				},
			};
		},
		replace({
			host,
			header,
		}: Partial<{
			host: string;
			header: Header;
		}>): GraphQLClient {
			return {
				...this,
				host: host ? host : this.host,
				header: header ? header : this.header,
			};
		},
		async query<TResult, TVariables>(
			query: Document<TResult, TVariables>,
			variables?: TVariables
		): Promise<{
			data: TResult;
			error?: Error;
		}> {
			try {
				return {
					data: await this.exec<TResult, TVariables>(query, variables),
				};
			} catch (e) {
				return {
					data: null as TResult,
					error: e instanceof Error ? e : new Error(JSON.stringify(e)),
				};
			}
		},
		async exec<TResult, TVariables>(
			query: Document<TResult, TVariables>,
			variables?: TVariables
		): Promise<TResult> {
			return fnExec({
				query,
				header: this.header,
				host: this.host,
				variables,
			});
		},
	};

	return c;
}
