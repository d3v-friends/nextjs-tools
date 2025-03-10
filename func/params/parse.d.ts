import { NextPageSearchParams } from "types";
export default function <T extends Record<string, string | string[] | number | null>>(params: Promise<NextPageSearchParams>, initParams: T): Promise<T>;
