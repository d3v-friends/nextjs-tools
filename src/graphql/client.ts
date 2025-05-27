import {fnCookies} from "../cookies";
import {Document, errEmptyGraphqlResponse, errUnexpectedGraphqlError} from "./types";

export default class Client {
	constructor(
		public readonly host: string,
		private header?: Record<string, string>
	) {}

	addHeader(header: Record<string, string>) {
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
		...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
	): Promise<{data: TResult; error?: Error}> {
		try {
			return {
				data: await this.exec({
					query,
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

	async inline<TResult, TVariables>(
		query: Document<TResult, TVariables>,
		...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
	): Promise<TResult> {
		return this.exec({
			query,
			variables,
		});
	}

	async exec<TResult, TVariables>(args: ExecArgs<TResult, TVariables>): Promise<TResult> {
		let query = args.query.toString();

		if (args.query instanceof Array) {
			query = "";
			for (let str of args.query) {
				query = `${query}${str}`;
			}
		}

		const body = {
			method: "POST",
			headers: await fnCookies.newHeader(this.header),
			body: JSON.stringify({
				query,
				variables: args.variables,
			}),
		};

		const response = await fetch(this.host, body);

		switch (response.status) {
			case 200:
				const res: any = await response.json();
				if (res.hasOwnProperty("errors")) {
					throw new Error((res as GqlErrorResponse).errors[0].message);
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

type ExecArgs<TResult, TVariables> = {
	query: Document<TResult, TVariables>;
	variables?: TVariables;
};

type GqlErrorResponse = {
	errors: {
		message: string;
		path: string[];
	}[];
	data: unknown;
};
