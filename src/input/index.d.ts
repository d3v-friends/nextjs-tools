declare const _default: {
    field: {
        username: (...opts: Partial<import("./types").InputOption<string>>[]) => import("./types").FnInput<string>;
        password: (...opts: Partial<import("./types").InputOption<string>>[]) => import("./types").FnInput<string>;
        ip: (...opts: Partial<import("./types").InputOption<string>>[]) => import("./types").FnInput<string>;
        port: (...opts: Partial<import("./types").InputOption<number>>[]) => import("./types").FnInput<number>;
        otp: (...opts: Partial<import("./types").InputOption<string>>[]) => import("./types").FnInput<string>;
        string: (...opts: Partial<import("./types").InputOption<string>>[]) => import("./types").FnInput<string>;
        number: (...opts: Partial<import("./types").InputOption<number>>[]) => import("./types").FnInput<number>;
        objectId: (...opts: Partial<import("./types").InputOption<string>>[]) => import("./types").FnInput<string>;
        boolean: (...opts: Partial<import("./types").InputOption<import("./types").StringBool>>[]) => import("./types").FnInput<import("./types").StringBool>;
        lowerSnakeCase: (...opts: Partial<import("./types").InputOption<string>>[]) => import("./types").FnInput<string>;
        form: <INPUT>(opts: import("./types").FormArgs<INPUT>) => import("./types").FormHelper<INPUT>;
    };
    fn: {
        formField: <T>(form: FormData, input: import("./types").InputHelper<T>, ...throws: boolean[]) => import("..").Nullable<T>;
        formFieldAll: <INPUT>(form: FormData, helper: import("./types").FormHelper<INPUT>, ...throws: boolean[]) => INPUT;
        inputAttributes: <INPUT>(i: import("./types").InputHelper<INPUT>) => import("./types").HTMLInputAttributes;
        initValue: <INPUT>(helper: import("./types").FormHelper<INPUT>) => INPUT;
    };
};
export default _default;
