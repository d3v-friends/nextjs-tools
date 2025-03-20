import { Nullable } from "..";
import { FormHelper, HTMLInputAttributes, InputHelper } from "./types";
declare function inputAttributes<INPUT>(i: InputHelper<INPUT>): HTMLInputAttributes;
declare function formField<T>(form: FormData, input: InputHelper<T>, ...throws: boolean[]): Nullable<T>;
declare function formFieldAll<INPUT>(form: FormData, helper: FormHelper<INPUT>, ...throws: boolean[]): INPUT;
declare function initValue<INPUT>(helper: FormHelper<INPUT>): INPUT;
declare const _default: {
    formField: typeof formField;
    formFieldAll: typeof formFieldAll;
    inputAttributes: typeof inputAttributes;
    initValue: typeof initValue;
};
export default _default;
