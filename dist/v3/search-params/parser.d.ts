type Parser<T> = (str: string) => T;
declare const _default: {
    objectId: (def?: string) => Parser<string>;
    naturalNumber: (def?: number) => Parser<number>;
    decimal: (def?: string) => Parser<string>;
    string: (def?: string) => Parser<string>;
    pattern: (regexp: string, def?: string) => Parser<string>;
    rfc3339: (def?: string) => Parser<string>;
};
export default _default;
