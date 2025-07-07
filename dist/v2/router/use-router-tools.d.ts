import { AppRouterInstance, NavigateOptions, PrefetchOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
declare class RouterTools implements AppRouterInstance {
    readonly router: AppRouterInstance;
    constructor(router: AppRouterInstance);
    pushBySearchParams(searchParams: Record<string, Date | string | number | null | undefined | string[] | number[]>, host?: string, options?: NavigateOptions): void;
    push(href: string, options?: NavigateOptions): void;
    refresh(): void;
    back(): void;
    forward(): void;
    replace(href: string, options?: NavigateOptions): void;
    prefetch(href: string, options?: PrefetchOptions): void;
}
export default function (): RouterTools;
export {};
