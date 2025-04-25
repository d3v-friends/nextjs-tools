import { ReactNode } from "react";
export * from "./cookies";
export * from "./css";
export * from "./env";
export * from "./fn";
export * from "./graphql";
export * from "./logger";
export * from "./pbkdf2";
export * from "./reflect";
export * from "./server-action";
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
