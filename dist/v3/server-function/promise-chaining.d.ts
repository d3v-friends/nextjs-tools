import { ReactNode } from "react";
export declare const MODAL_CANCEL = "MODAL_CANCEL";
declare global {
    interface Promise<T> {
        ok<TResult = T>(this: Promise<boolean>, fn: (value: T) => TResult | PromiseLike<TResult>): Promise<TResult>;
        gFetch<TResult>(this: Promise<[any, string | null]>, fn?: (value: T extends [infer GResult, string | null] ? GResult : never) => TResult | PromiseLike<TResult>): Promise<TResult>;
        error(book?: Record<string, ReactNode>, fnAlert?: (message: string) => ReactNode): void;
    }
}
export default function (): null;
