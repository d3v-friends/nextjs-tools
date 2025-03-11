import { Document } from "src/func/graphql/types";
export default function <TResult, TVariables>(query: Document<TResult, TVariables>, header?: Record<string, string>, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]): Promise<{
    result: TResult;
    error?: Error;
}>;
