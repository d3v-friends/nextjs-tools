declare const fnParser: {
    number: (v: unknown, initValue?: number) => number;
    isNumber: (v: unknown) => boolean;
    naturalNumber: (v: unknown, initValue?: number) => number;
    integer: (v: unknown, initValue?: number) => number;
    boolean: (v: unknown, initValue?: boolean) => boolean;
    objectId: (v: unknown, initValue?: string) => string;
};
export default fnParser;
