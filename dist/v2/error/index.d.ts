type Parser = (str: string) => string;
declare function parse(record: Record<string, string>): Parser;
declare const _default: {
    parse: typeof parse;
};
export default _default;
