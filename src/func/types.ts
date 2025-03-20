import {ReactNode} from "react";

export type * from "@func/action/types";
export type * from "@func/graphql/types";
export type * from "@func/input/types";

export type NextPageProps = Readonly<{
	params: Promise<NextPageParams>;
	searchParams: Promise<NextPageSearchParams>;
}>;

export type NextLayoutProps = Readonly<{children?: ReactNode}>;

export type NextPageSearchParams = Record<string, string | string[] | undefined>;
export type NextPageParams = {slug: string | string[]};
export type Nullable<T> = T | null | undefined;
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
	? ElementType
	: never;
