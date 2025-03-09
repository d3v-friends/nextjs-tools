import {HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute} from "react";

export type HTMLInputModeAttribute = "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";

export type StringBool = "true" | "false";

export type HTMLInputAttributes = {
	name?: string;
	defaultValue?: string;
	type?: HTMLInputTypeAttribute;
	autoComplete?: HTMLInputAutoCompleteAttribute;
	inputMode?: HTMLInputModeAttribute;
};

export type InputHelper<T> = InputOption<T> & {name: string};

export type InputOption<T> = {
	defaultValue: T;
	regexp: string;
	invalidMessage: string;
	nullable: boolean;
	type: HTMLInputTypeAttribute;
	autoComplete?: HTMLInputAutoCompleteAttribute;
	inputMode?: HTMLInputModeAttribute;
};

/* -------------------------------------------------------------------------------------------------- */
// ServerAction

export type State<INPUT, RESPONSE> = {
	input: INPUT;
	response?: RESPONSE;
	error?: Error;
};

export type ServerAction<INPUT, RESPONSE> = (_: any, form: FormData) => Promise<State<INPUT, RESPONSE>>;

export type ServerActionHandler<INPUT, RESPONSE> = (input: INPUT) => Promise<RESPONSE>;

/* -------------------------------------------------------------------------------------------------- */
// errors
export const errInvalidFormValueRegexp = "invalid_form_value_regexp";
export const errInvalidFormValueType = "invalid_form_value_type";
export const errNotFoundInputHelper = "not_found_input_helper";

/* -------------------------------------------------------------------------------------------------- */

// export type FormHelper<INPUT> = Record<keyof INPUT, InputHelper<any>>;
export type FormHelper<INPUT> = {
	[P in keyof INPUT]: InputHelper<INPUT[P]>;
};

export type FormArgs<INPUT> = {
	[P in keyof INPUT]: FnInput<INPUT[P]>;
};

export type FnInput<T> = (name: string) => InputHelper<T>;
