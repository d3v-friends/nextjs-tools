export interface DocumentTypeDecoration<TResult, TVariables> {
    __apiType?: (variables: TVariables) => TResult;
}
export interface Document<TResult, TVariables> {
    toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}
export declare const errEmptyGraphqlResponse = "empty_graphql_response";
export declare const errUnexpectedGraphqlError = "unexpected_graphql_error";
export type GraphqlError = {
    errors: {
        message: string;
        path: string[];
    }[];
    data: unknown;
};
