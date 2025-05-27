"use server";
import {fnCookies} from "../cookies";
import {Document, errEmptyGraphqlResponse, errUnexpectedGraphqlError, GraphqlError} from "./types";

export default class Client {
	public readonly host;

	constructor(
		public readonly envKeyHost?: string,
		private header?: Record<string, string>
	) {
		this.host = process.env[envKeyHost || "GQL_HOST"] || "";
	}

	appendHeader(header: Record<string, string>) {
		if (this.header) {
			header = {...this.header, ...header};
		}
		return new Client(this.host, header);
	}

	replaceHeader(header: Record<string, string>) {
		return new Client(this.host, header);
	}

	replaceHost(host: string) {
		return new Client(host, this.header);
	}

	async query<TResult, TVariables>(
		query: Document<TResult, TVariables>,
		variables?: TVariables
	): Promise<{data: TResult; error?: Error}> {
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
	}

	async exec<TResult, TVariables>(query: Document<TResult, TVariables>, variables?: TVariables): Promise<TResult> {
		let q = query.toString();
		if (query instanceof Array) {
			q = "";
			for (let str of query) {
				q = `${q}${str}`;
			}
		}

		const body = {
			method: "POST",
			headers: await fnCookies.newHeader(this.header),
			body: JSON.stringify({
				query: q,
				variables,
			}),
		};

		const response = await fetch(this.host, body);

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
}
