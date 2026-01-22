import {ReactNode} from "react";

export type NextPageSearchParams = Record<string, string | undefined>;
export type NextPageParams = {slug: string};
export type NextPageProps = Readonly<{
	params: Promise<NextPageParams>;
	searchParams: Promise<NextPageSearchParams>;
}>;
export type NextLayoutProps = Readonly<{
	children?: ReactNode;
}>;
