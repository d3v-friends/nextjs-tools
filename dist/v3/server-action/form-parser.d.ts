import { Nullable } from "../../types";
declare function string(form: FormData, key: string): Nullable<string>;
declare function integer(form: FormData, key: string): Nullable<number>;
declare function decimal(form: FormData, key: string): Nullable<number>;
declare function strings(form: FormData, key: string): string[];
declare function integers(form: FormData, key: string): number[];
declare function decimals(form: FormData, key: string): number[];
declare const _default: {
    string: typeof string;
    integer: typeof integer;
    decimal: typeof decimal;
    strings: typeof strings;
    integers: typeof integers;
    decimals: typeof decimals;
};
export default _default;
