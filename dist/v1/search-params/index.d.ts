import extract from "./extract";
declare const fnSearchParams: {
    extract: typeof extract;
    parser: {
        number: (def: number) => (str: string) => number;
        objectId: (def: string) => (str: string) => string;
        string: (list: string[], def: string) => (str: string) => string;
    };
    nullableParser: {
        number: (str: string) => import("../..").Nullable<number>;
        objectId: (str: string) => import("../..").Nullable<string>;
    };
};
export default fnSearchParams;
