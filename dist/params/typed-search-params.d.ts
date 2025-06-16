import { NextPageSearchParams } from "@root";
type Params<P> = {
    [K in keyof P]: (str: string) => SearchParamParser<P[K]>;
};
type SearchParamParser<T> = (str: string) => T;
export default function <P>(params: Promise<NextPageSearchParams>, form: Params<P>): Promise<P>;
export {};
