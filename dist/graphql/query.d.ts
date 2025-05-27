import { Document, Header, QueryResult } from "./types";
export default function <TResult, TVariables>(host: string, query: Document<TResult, TVariables>, header?: Header, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]): Promise<QueryResult<TResult>>;
