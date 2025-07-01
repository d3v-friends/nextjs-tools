declare function join<T extends string>(v: T[]): string;
declare function split(str: string): string[];
declare function has(csv: string, value: string): boolean;
declare function pop(str: string, value: string): string;
declare function push(str: string, value: string): string;
declare const _default: {
    join: typeof join;
    split: typeof split;
    has: typeof has;
    pop: typeof pop;
    push: typeof push;
};
export default _default;
