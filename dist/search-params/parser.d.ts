type FnParser<T> = (str: string) => T;
declare const parser: {
    number: (def: number) => FnParser<number>;
    objectId: (def: string) => FnParser<string>;
    string: (list: string[], def: string) => FnParser<string>;
};
export default parser;
