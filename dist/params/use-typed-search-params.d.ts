type Params<KEY extends string> = Record<KEY, string | number>;
export default function <KEY extends string>(initParams: Params<KEY>): Params<KEY>;
export {};
