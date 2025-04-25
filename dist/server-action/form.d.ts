import { Form, FormValue, FromString } from "./types";
declare function string<INPUT>(data: FormData, form: Form<INPUT>): FromString<INPUT>;
declare function value<INPUT>(data: FormData, form: Form<INPUT>): FormValue<INPUT>;
declare function defaultValue<INPUT>(form: Form<INPUT>): INPUT;
declare function defaultString<INPUT>(form: Form<INPUT>): FromString<INPUT>;
declare function createForm<INPUT>(form: Form<INPUT>): Form<INPUT>;
declare const _default: {
    string: typeof string;
    value: typeof value;
    defaultValue: typeof defaultValue;
    defaultString: typeof defaultString;
    createForm: typeof createForm;
};
export default _default;
