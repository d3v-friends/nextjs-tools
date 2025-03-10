import { ReactNode } from "react";
export type * from "./action/types";
export type * from "./graphql/types";
export type * from "./input/types";
export type NextPageProps = Readonly<{
    params: Promise<NextPageParams>;
    searchParams: Promise<NextPageSearchParams>;
}>;
export type NextPageSearchParams = Record<string, string | string[] | undefined>;
export type NextPageParams = {
    slug: string | string[];
};
export type Nullable<T> = T | null | undefined;
export type PropsChildren = Readonly<{
    children?: ReactNode;
}>;
