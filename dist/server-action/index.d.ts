import parser from "./parser";
export { default as useServerAction } from "./use-server-action";
declare const fnServerAction: {
    inputs: {
        string: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<string>>) => import("..").InputAttributes<string>;
        strings: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<string[]>>) => import("..").InputAttributes<string[]>;
        username: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<string>>) => import("..").InputAttributes<string>;
        password: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<string>>) => import("..").InputAttributes<string>;
        otp: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<string>>) => import("..").InputAttributes<string>;
        rfc3339Time: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<string>>) => import("..").InputAttributes<string>;
        lowerSnakeCase: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<string>>) => import("..").InputAttributes<string>;
        ip: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<string>>) => import("..").InputAttributes<string>;
        objectID: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<string>>) => import("..").InputAttributes<string>;
        number: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<number>>) => import("..").InputAttributes<number>;
        port: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<number>>) => import("..").InputAttributes<number>;
        numbers: ({ name, defaultValue, type, autoComplete, inputMode, hidden, regexp, nullable, inputFormat, inputType, value, }: Partial<import("..").InputAttributes<number[]>>) => import("..").InputAttributes<number[]>;
    };
    forms: {
        string: <INPUT>(data: FormData, form: import("..").ActionForm<INPUT>) => import("..").ActionFromString<INPUT>;
        value: <INPUT>(data: FormData, form: import("..").ActionForm<INPUT>) => import("..").ActionFormValue<INPUT>;
        defaultValue: <INPUT>(form: import("..").ActionForm<INPUT>) => INPUT;
        defaultString: <INPUT>(form: import("..").ActionForm<INPUT>) => import("..").ActionFromString<INPUT>;
        createForm: <INPUT>(form: import("..").ActionForm<INPUT>) => import("..").ActionForm<INPUT>;
    };
    parser: typeof parser;
};
export { fnServerAction };
