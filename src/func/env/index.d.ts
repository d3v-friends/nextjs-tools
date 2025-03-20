import { string as svString, number as svNumber, boolean as svBoolean } from "../env/server";
import { string as clString, number as clNumber, boolean as clBoolean } from "../env/client";
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
