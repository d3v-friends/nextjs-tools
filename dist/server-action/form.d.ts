import { ActionForm, ActionFormValue, ActionFromString } from "..";
declare function string<INPUT>(data: FormData, form: ActionForm<INPUT>): ActionFromString<INPUT>;
declare function value<INPUT>(data: FormData, form: ActionForm<INPUT>): ActionFormValue<INPUT>;
declare function defaultValue<INPUT>(form: ActionForm<INPUT>): INPUT;
declare function defaultString<INPUT>(form: ActionForm<INPUT>): ActionFromString<INPUT>;
declare function createForm<INPUT>(form: ActionForm<INPUT>): ActionForm<INPUT>;
declare const _default: {
    string: typeof string;
    value: typeof value;
    defaultValue: typeof defaultValue;
    defaultString: typeof defaultString;
    createForm: typeof createForm;
};
export default _default;
