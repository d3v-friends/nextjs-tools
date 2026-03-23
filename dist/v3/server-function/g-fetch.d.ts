export interface Options {
    host: string;
    header: Record<string, string>;
}
export type Response<TResult> = [TResult, string | null];
export default function <TResult, TVariables>(query: Document<TResult, TVariables>, variables?: TVariables, opt?: Partial<Options>): Promise<Response<TResult>>;
export interface DocumentTypeDecoration<TResult, TVariables> {
    __apiType?: (variables: TVariables) => TResult;
}
export interface Document<TResult, TVariables> {
    toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}
