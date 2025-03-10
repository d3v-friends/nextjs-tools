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
