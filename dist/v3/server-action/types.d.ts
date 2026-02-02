import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
import { Nullable } from "../../types";
type ResultType = "string" | "integer" | "decimal" | "strings" | "integers" | "decimals";
export type InputProperty = Partial<InputConvenience> & Partial<InputAttribute>;
type InputConvenience = {
    regexp: RegExp | string;
    resultType: ResultType;
    invalidMessage: string;
};
type InputAttribute = {
    name: string;
    disabled: boolean;
    required: boolean;
    placeholder: string;
    type: HTMLInputTypeAttribute;
    autoComplete: HTMLInputAutoCompleteAttribute;
};
export type InputParser<T> = (str: Nullable<string>) => T;
export type Input<T> = InputProperty & {
    parser: InputParser<T>;
    validate: (value: T) => boolean;
};
export type FormType<T extends object> = {
    [KEY in keyof T]: Input<T[KEY]>;
};
export type UnwrapForm<F> = {
    [K in keyof F]: F[K] extends Input<infer U> ? U : never;
};
export interface ServerActionState<I, R> {
    time: number;
    response: R;
    input: I;
    error?: string;
}
export type ServerActionHandler<I, R> = (parameter: I) => Promise<R>;
export type ServerAction<I, R> = (_: any, form: FormData) => Promise<ServerActionState<I, R>>;
export {};
