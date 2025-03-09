export type NextPageProps = {
    params: Promise<NextPageParams>;
    searchParams: Promise<NextPageSearchParams>;
};
export type NextPageSearchParams = Record<string, string | string[] | undefined>;
export type NextPageParams = {
    slug: string | string[];
};
export type Nullable<T> = T | null | undefined;
