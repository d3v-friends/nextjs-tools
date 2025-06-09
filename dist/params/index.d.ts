import parse from "./parse";
import searchParams from "./search-params";
import typedSearchParams from "./typed-search-params";
import update from "./update";
declare const fnParams: {
    parse: typeof parse;
    update: typeof update;
    searchParams: typeof searchParams;
    typedSearchParams: typeof typedSearchParams;
};
export default fnParams;
