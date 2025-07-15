import { Document, Header } from "../..";
export type FetchArgs<TResult, TVariables> = {
    host: string;
    header?: Header;
    query: Document<TResult, TVariables>;
    variables?: TVariables;
};
export default function <TResult, TVariables>(args: FetchArgs<TResult, TVariables>): Promise<TResult>;
