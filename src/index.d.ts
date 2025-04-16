import { ReactNode } from "react";
import fnAction from "./action";
import fnCookies from "./cookies";
import fnCss from "./css";
import fnEnv from "./env";
import fnGraphql from "./graphql";
import fnInput from "./input";
import fnParams from "./params";
import fnPbkdf2 from "./pbkdf2";
import fnReflect from "./reflect";
export { fnAction, fnCookies, fnCss, fnEnv, fnGraphql, fnInput, fnParams, fnPbkdf2, fnReflect };
export * from "./action/types";
export * from "./input/types";
export * from "./cookies/types";
export * from "./graphql/types";
export * from "./input/types";
export * from "./strings";
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
