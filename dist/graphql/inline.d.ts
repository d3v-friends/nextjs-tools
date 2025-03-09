import { TypedDocumentString } from "./types";
export default function <TResult, TVariables>(query: TypedDocumentString<TResult, TVariables>, header?: Record<string, string>, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]): Promise<TResult>;
