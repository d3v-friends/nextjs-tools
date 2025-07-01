import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
export * from "./cookies";
export * from "./env";
export * from "./fn";
export * from "./logger";
export * from "./pbkdf2";
export * from "./css";
export { default as fnReflect } from "./reflect";
export { default as fnGraphQL } from "./graphql";
export { default as fnParams } from "./params";
export { default as fnSearchParams } from "./search-params";
export { default as fnServerAction } from "./server-action";
export { default as useServerAction } from "./server-action/use-server-action";
export type HTMLInputModeAttribute = "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
export type InputType = "string" | "number" | "boolean";
export type InputFormat = "text" | "csv";
export interface HTMLInputAttributes {
    name?: string;
    defaultValue?: string;
    type?: HTMLInputTypeAttribute;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    inputMode?: HTMLInputModeAttribute;
    hidden?: boolean;
}
export interface InputAttributes<T> extends HTMLInputAttributes {
    regexp?: string;
    nullable?: boolean;
    inputFormat?: InputFormat;
    inputType?: InputType;
    value: T;
    invalidMessage?: string;
}
export type ActionForm<INPUT> = {
    [K in keyof INPUT]: InputAttributes<INPUT[K]>;
};
export type ActionFromString<INPUT> = {
    [K in keyof INPUT]: string;
};
export type ActionFormValue<INPUT> = {
    input: INPUT;
    err?: string;
};
export interface ActionState<INPUT, RESPONSE> {
    time: number;
    value: INPUT;
    string: {
        [K in keyof INPUT]: string;
    };
    err?: string;
    response?: RESPONSE;
}
export type ActionHandler<INPUT, RESPONSE> = (input: INPUT) => Promise<RESPONSE>;
