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
export type Header = Record<string, string>;
export type QueryResult<TResult> = {
    data: TResult;
    error?: Error;
};
export interface GraphQLClient {
    readonly host: string;
    readonly header?: Header;
    appendHeader(header: Header): GraphQLClient;
    replace(args: Partial<{
        host: string;
        header: Header;
    }>): GraphQLClient;
    query<TResult, TVariables>(query: Document<TResult, TVariables>, variables?: TVariables): Promise<{
        data: TResult;
        error?: Error;
    }>;
    exec<TResult, TVariables>(query: Document<TResult, TVariables>, variables?: TVariables): Promise<TResult>;
}
