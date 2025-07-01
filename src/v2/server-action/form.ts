// 결과물
import {HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute} from "react";

export type InputValue = string | number | boolean | File | null | string[] | number[];
export type EntryParser<T extends InputValue> = (v: FormDataEntryValue) => {value: T; error?: Error};

export type Input<T extends InputValue> = {
	entryParser: EntryParser<T>;
	type?: HTMLInputTypeAttribute;
	autoComplete?: HTMLInputAutoCompleteAttribute;
	inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
};

// 결과물
export type FormValue = {
	[K: string]: InputValue;
};

export type FormStringValue<T> = {
	[K in keyof T]: string;
};

export type Form<I extends FormValue> = {
	[K in keyof I]: Input<I[K]>;
};

function getString<T extends FormValue>(form: Form<T>, data: FormData): FormStringValue<T> {
	const res: any = {};
	for (const name in form) {
		const entry = data.get(name);
		if (entry === null) {
			res[name] = "";
			continue;
		}

		if (typeof entry !== "string") {
			res[name] = "";
		}

		res[name] = entry;
	}
	return res as FormStringValue<T>;
}

function getValue<T extends FormValue>(form: Form<T>, data: FormData): {value: FormValue; error?: Error} {
	const res: any = {};
	for (let name in form) {
		const entry = data.get(name);
		if (entry === null) {
			res[name] = null;
			continue;
		}
		const {value, error} = form[name].entryParser(entry);

		if (error) return {value: {} as FormValue, error};

		res[name] = value;
	}

	return {value: res as FormValue};
}

function create<T extends FormValue>(form: Form<T>): Form<T> {
	return form;
}

export default {
	getString,
	getValue,
	create,
};
