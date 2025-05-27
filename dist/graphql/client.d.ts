import { Document } from "./types";
export declare class Client {
    readonly host: string;
    private readonly header?;
    constructor(host: string, header?: Record<string, string> | undefined);
    appendHeader(header: Record<string, string>): Client;
    replaceHeader(header: Record<string, string>): Client;
    replaceHost(host: string): Client;
    query<TResult, TVariables>(query: Document<TResult, TVariables>, variables?: TVariables): Promise<{
        data: TResult;
        error?: Error;
    }>;
    exec<TResult, TVariables>(query: Document<TResult, TVariables>, variables?: TVariables): Promise<TResult>;
}
