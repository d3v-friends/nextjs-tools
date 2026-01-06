import concat from "./concat";
import sum from "./sum";
import trim from "./trim";
declare const fnCss: {
    concat: typeof concat;
    trim: typeof trim;
    sum: typeof sum;
};
export { fnCss };
