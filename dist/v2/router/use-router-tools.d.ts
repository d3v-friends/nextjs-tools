import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
declare class RouterTools {
    readonly router: AppRouterInstance;
    constructor(router: AppRouterInstance);
    push(searchParams: Record<string, Date | string | number | null | undefined | string[] | number[]>, host?: string): void;
    refresh(): void;
}
export default function (router: AppRouterInstance): RouterTools;
export {};
