export interface DocumentTypeDecoration<TResult, TVariables> {
	__apiType?: (variables: TVariables) => TResult;
}

export interface Document<TResult, TVariables> {
	toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}

/* -------------------------------------------------------------------------------------------------- */
// error
export const errEmptyGraphqlResponse = "empty_graphql_response";
export const errUnexpectedGraphqlError = "unexpected_graphql_error";

export type GraphqlError = {
	errors: {
		message: string;
		path: string[];
	}[];
	data: unknown;
};

export type Header = Record<string, string>;

export type QueryResult<TResult> = {
	data: TResult;
	error?: Error;
};
