export * from "./v1";
export * from "./v2";

// type
export type Nullable<T> = T | null | undefined;
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
	? ElementType
	: never;

// search params
export type NextPageSearchParams = Record<string, string | undefined>;
export type NextPageParams = {slug: string};

// graphql
export interface DocumentTypeDecoration<TResult, TVariables> {
	__apiType?: (variables: TVariables) => TResult;
}

export interface Document<TResult, TVariables> {
	toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}

export type GraphqlError = {
	errors: {
		message: string;
		path: string[];
	}[];
	data: unknown;
};

export type Header = Record<string, string>;

export type QueryResult<TResult> = {
	data: TResult;
	error?: Error;
};
