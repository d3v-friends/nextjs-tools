import { string as svString, number as svNumber, boolean as svBoolean } from "func/env/server";
import { string as clString, number as clNumber, boolean as clBoolean } from "func/env/client";
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
