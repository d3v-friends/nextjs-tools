import { Document } from "./types";
export default class Client {
    readonly host: string;
    private header?;
    constructor(host: string, header?: Record<string, string> | undefined);
    addHeader(header: Record<string, string>): Client;
    replaceHeader(header: Record<string, string>): Client;
    replaceHost(host: string): Client;
    query<TResult, TVariables>(query: Document<TResult, TVariables>, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]): Promise<{
        data: TResult;
        error?: Error;
    }>;
    inline<TResult, TVariables>(query: Document<TResult, TVariables>, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]): Promise<TResult>;
    exec<TResult, TVariables>(args: ExecArgs<TResult, TVariables>): Promise<TResult>;
}
type ExecArgs<TResult, TVariables> = {
    query: Document<TResult, TVariables>;
    variables?: TVariables;
};
export {};
