import { TypedDocumentString } from "./types";
type ExecArgs<TResult, TVariables> = {
    header?: Record<string, string>;
    query: TypedDocumentString<TResult, TVariables>;
    variables?: TVariables;
};
export default function <TResult, TVariables>(args: ExecArgs<TResult, TVariables>): Promise<TResult>;
export {};
