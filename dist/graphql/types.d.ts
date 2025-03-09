export interface DocumentTypeDecoration<TResult, TVariables> {
    __apiType?: (variables: TVariables) => TResult;
}
export declare class TypedDocumentString<TResult, TVariables> extends String implements DocumentTypeDecoration<TResult, TVariables> {
    private value;
    __meta__?: Record<string, any> | undefined;
    __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];
    constructor(value: string, __meta__?: Record<string, any> | undefined);
    toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}
export declare const errEmptyGraphqlResponse = "empty_graphql_response";
export declare const errUnexpectedGraphqlError = "unexpected_graphql_error";
