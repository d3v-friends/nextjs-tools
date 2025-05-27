import { Document, Header } from "./types";
type ExecArgs<TResult, TVariables> = {
    host: string;
    header?: Header;
    query: Document<TResult, TVariables>;
    variables?: TVariables;
};
export default function <TResult, TVariables>(args: ExecArgs<TResult, TVariables>): Promise<TResult>;
export {};
