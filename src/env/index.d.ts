import { boolean as clBoolean, number as clNumber, string as clString } from "./client";
import { boolean as svBoolean, number as svNumber, string as svString } from "./server";
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
