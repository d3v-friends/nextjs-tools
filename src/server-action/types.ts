import {HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute} from "react";

export type HTMLInputModeAttribute = "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";

export type InputType = "string" | "number" | "boolean";
export type InputFormat = "text" | "csv";

export interface HTMLInputAttributes {
	name?: string;
	defaultValue?: string;
	type?: HTMLInputTypeAttribute;
	autoComplete?: HTMLInputAutoCompleteAttribute;
	inputMode?: HTMLInputModeAttribute;
	hidden?: boolean;
}

export interface InputAttributes<T> extends HTMLInputAttributes {
	regexp?: string;
	nullable?: boolean;
	inputFormat?: InputFormat;
	inputType?: InputType;
	value: T;
	invalidMessage?: string;
}

export type Form<INPUT> = {
	[K in keyof INPUT]: InputAttributes<INPUT[K]>;
};

export type FromString<INPUT> = {[K in keyof INPUT]: string};

export type FormValue<INPUT> = {input: INPUT; err?: string};

export interface ActionState<INPUT, RESPONSE> {
	time: number;
	value: INPUT;
	string: {[K in keyof INPUT]: string};
	err?: string;
	response?: RESPONSE;
}

export type ActionHandler<INPUT, RESPONSE> = (input: INPUT) => Promise<RESPONSE>;
export type Action = (payload: FormData) => void;
