import { Nullable } from "@root/index";
import merge from "./merge";
declare const fnReflect: {
    merge: typeof merge;
    number: (v: unknown, initValue?: number) => number;
    numberNull: (v: unknown) => Nullable<number>;
};
export default fnReflect;
