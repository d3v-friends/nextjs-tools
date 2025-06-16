declare const fnCsv: {
    join: <T extends string>(v: T[]) => string;
    split: (str: string) => string[];
    has: (csv: string, value: string) => boolean;
    pop: (str: string, value: string) => string;
    push: (str: string, value: string) => string;
};
export default fnCsv;
