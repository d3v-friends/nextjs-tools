import { Nullable } from "@root";
declare const parser: {
    number: (v: string | number | any, initValue: number) => number;
    numberNull: (v: string | number) => Nullable<number>;
};
export default parser;
