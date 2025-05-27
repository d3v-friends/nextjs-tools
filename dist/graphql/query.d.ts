import { Document } from "./types";
export default function <TResult, TVariables>(host: string, query: Document<TResult, TVariables>, header?: Record<string, string>, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]): Promise<{
    result: TResult;
    error?: Error;
}>;
