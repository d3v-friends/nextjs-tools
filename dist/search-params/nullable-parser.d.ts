import { Nullable } from "./..";
declare const parser: {
    number: (str: string) => Nullable<number>;
    objectId: (str: string) => Nullable<string>;
};
export default parser;
