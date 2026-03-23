type Fn<I extends any[], R> = (...i: I) => Promise<R>;
export default function <I extends any[], R>(fn: Fn<I, R>): [boolean, Fn<I, R>];
export {};
