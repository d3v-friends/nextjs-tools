import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode } from "react";
export * from "./cookies";
export * from "./css";
export * from "./env";
export * from "./fn";
export * from "./logger";
export * from "./params";
export * from "./pbkdf2";
export * from "./reflect";
export * from "./server-action";
export * from "./strings";
export { default as useTypedSearchParams } from "./params/use-typed-search-params";
export { default as fnGraphQL } from "./graphql";
export type NextPageProps = Readonly<{
    params: Promise<NextPageParams>;
    searchParams: Promise<NextPageSearchParams>;
}>;
export type NextLayoutProps = Readonly<{
    children?: ReactNode;
}>;
export type NextPageSearchParams = Record<string, string | string[] | undefined>;
export type NextPageParams = {
    slug: string | string[];
};
export type Nullable<T> = T | null | undefined;
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
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
export type ChildNode = ReactNode | ReactNode[];
