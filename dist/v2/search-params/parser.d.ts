type Parser<T> = (str: string) => T;
declare const _default: {
    objectId: (def?: string) => Parser<string>;
    number: (def?: number) => Parser<number>;
    decimal: (def?: number) => Parser<number>;
    string: (def?: string) => Parser<string>;
    pattern: (regexp: string, def?: string) => Parser<string>;
};
export default _default;
