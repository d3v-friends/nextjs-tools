import { TypedDocumentString } from "../graphql/types";
export default function <TResult, TVariables>(query: TypedDocumentString<TResult, TVariables>, header?: Record<string, string>, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]): Promise<{
    result: TResult;
    error?: Error;
}>;
