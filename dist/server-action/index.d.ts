import parser from "./parser";
export { default as useServerAction } from "./use-server-action";
declare const fnServerAction: {
    inputs: {
        string: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<string>>) => import("./types").InputAttributes<string>;
        strings: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<string[]>>) => import("./types").InputAttributes<string[]>;
        username: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<string>>) => import("./types").InputAttributes<string>;
        password: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<string>>) => import("./types").InputAttributes<string>;
        otp: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<string>>) => import("./types").InputAttributes<string>;
        rfc3339Time: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<string>>) => import("./types").InputAttributes<string>;
        lowerSnakeCase: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<string>>) => import("./types").InputAttributes<string>;
        ip: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<string>>) => import("./types").InputAttributes<string>;
        objectID: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<string>>) => import("./types").InputAttributes<string>;
        number: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<number>>) => import("./types").InputAttributes<number>;
        port: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<number>>) => import("./types").InputAttributes<number>;
        numbers: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("./types").InputAttributes<number[]>>) => import("./types").InputAttributes<number[]>;
    };
    forms: {
        string: <INPUT>(data: FormData, form: import("./types").Form<INPUT>) => import("./types").FromString<INPUT>;
        value: <INPUT>(data: FormData, form: import("./types").Form<INPUT>) => import("./types").FormValue<INPUT>;
        defaultValue: <INPUT>(form: import("./types").Form<INPUT>) => INPUT;
        defaultString: <INPUT>(form: import("./types").Form<INPUT>) => import("./types").FromString<INPUT>;
        createForm: <INPUT>(form: import("./types").Form<INPUT>) => import("./types").Form<INPUT>;
    };
    parser: typeof parser;
};
export { fnServerAction };
