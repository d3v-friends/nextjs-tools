import merge from "./merge";
declare const fnReflect: {
    merge: typeof merge;
    parser: {
        number: (v: string | number | any, initValue: number) => number;
        numberNull: (v: string | number) => import("..").Nullable<number>;
    };
};
export default fnReflect;
