import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
export type HTMLInputModeAttribute = "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
export type StringBool = "true" | "false";
export type HTMLInputAttributes = {
    name?: string;
    defaultValue?: string;
    type?: HTMLInputTypeAttribute;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    inputMode?: HTMLInputModeAttribute;
};
export type InputHelper<T> = InputOption<T> & {
    name: string;
};
export type InputOption<T> = {
    returnValue: T;
    regexp: string;
    invalidMessage: string;
    nullable: boolean;
    valueType: "string" | "number" | "boolean";
    valueFormat: "text" | "csv";
    defaultValue: string;
    type: HTMLInputTypeAttribute;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    inputMode?: HTMLInputModeAttribute;
};
export declare const errInvalidFormValueRegexp = "invalid_form_value_regexp";
export declare const errInvalidFormValueType = "invalid_form_value_type";
export declare const errNotFoundInputHelper = "not_found_input_helper";
export type FormHelper<INPUT> = {
    [P in keyof INPUT]: InputHelper<INPUT[P]>;
};
export type FormArgs<INPUT> = {
    [P in keyof INPUT]: FnInput<INPUT[P]>;
};
export type FnInput<T> = (name: string) => InputHelper<T>;
