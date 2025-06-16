import routerPush from "./router-push";
import typedSearchParams from "./typed-search-params";
declare const fnParams: {
    typedSearchParams: typeof typedSearchParams;
    routerPush: typeof routerPush;
    parser: {
        objectId: (def?: string) => ((str: string) => string);
        number: (def?: number) => ((str: string) => number);
        decimal: (def?: number) => ((str: string) => number);
    };
};
export default fnParams;
