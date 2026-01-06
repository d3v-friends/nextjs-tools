import {Form, FormStringValue, FormValue} from "./types";

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

function getDefaultString<T extends FormValue>(form: Form<T>): FormStringValue<T> {
	const res: any = {};
	for (const name in form) {
		res[name] = "";
	}
	return res as FormStringValue<T>;
}

export default {
	getString,
	getValue,
	getDefaultString,
	create,
};
