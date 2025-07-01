import { Document, Header } from "../..";
type Args<TResult, TVariables> = {
    host: string;
    header?: Header;
    query: Document<TResult, TVariables>;
    variables?: TVariables;
};
export default function <TResult, TVariables>(args: Args<TResult, TVariables>): Promise<TResult>;
export {};
