import { NextPageSearchParams } from "@root";
type Params<P> = {
    [K in keyof P]: (str: string) => (str: string) => P[K];
};
export default function <P>(params: Promise<NextPageSearchParams>, form: Params<P>): Promise<P>;
export {};
