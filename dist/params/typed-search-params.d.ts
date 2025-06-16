import { NextPageSearchParams } from "@root";
type Params<P> = {
    [K in keyof P]: (str: string) => P[K];
};
export default function <P>(params: Promise<NextPageSearchParams>, form: Params<P>): Promise<P>;
export {};
