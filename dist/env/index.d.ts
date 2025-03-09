import { string as svString, number as svNumber, boolean as svBoolean } from "./server";
import { string as clString, number as clNumber, boolean as clBoolean } from "./client";
declare const _default: {
    server: {
        string: typeof svString;
        number: typeof svNumber;
        boolean: typeof svBoolean;
    };
    client: {
        string: typeof clString;
        number: typeof clNumber;
        boolean: typeof clBoolean;
    };
};
export default _default;
