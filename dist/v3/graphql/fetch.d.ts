import { Document, Header } from "../..";
export type FetchArgs<TResult, TVariables> = {
    host: string;
    query: Document<TResult, TVariables>;
    header?: Header;
    variables?: TVariables;
};
export default function <TResult, TVariables>(args: FetchArgs<TResult, TVariables>): Promise<TResult>;
