import { Document } from "./types";
export default class Client {
    readonly envKeyHost?: string | undefined;
    private header?;
    readonly host: string;
    constructor(envKeyHost?: string | undefined, header?: Record<string, string> | undefined);
    appendHeader(header: Record<string, string>): Client;
    replaceHeader(header: Record<string, string>): Client;
    replaceHost(host: string): Client;
    query<TResult, TVariables>(query: Document<TResult, TVariables>, variables?: TVariables): Promise<{
        data: TResult;
        error?: Error;
    }>;
    exec<TResult, TVariables>(query: Document<TResult, TVariables>, variables?: TVariables): Promise<TResult>;
}
