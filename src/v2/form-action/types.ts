// server-action
import {HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute} from "react";

export type ServerAction<I extends FormValue, R> = (input: I) => Promise<R>;

export type ActionState<I, R> = {
	time: number;
	string: {[K in keyof I]: string};
	error?: string;
	response?: R;
};

export type InputValue = string | number | boolean | File | null | string[] | number[];

export type EntryParser<T extends InputValue> = (v: FormDataEntryValue) => {value: T; error?: Error};

export type Input<T extends InputValue> = {
	entryParser: EntryParser<T>;
	type?: HTMLInputTypeAttribute;
	autoComplete?: HTMLInputAutoCompleteAttribute;
	inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
};

export type FormValue = {
	[K: string]: InputValue;
};

export type FormStringValue<T> = {
	[K in keyof T]: string;
};

export type Form<I extends FormValue> = {
	[K in keyof I]: Input<I[K]>;
};
