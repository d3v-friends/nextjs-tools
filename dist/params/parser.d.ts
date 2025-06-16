declare const fnSearchParamParser: {
    objectId: (def?: string) => ((str: string) => string);
    number: (def?: number) => ((str: string) => number);
    decimal: (def?: number) => ((str: string) => number);
};
export default fnSearchParamParser;
