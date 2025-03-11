import {
	errInvalidFormValueRegexp,
	errInvalidFormValueType,
	errNotFoundInputHelper,
	FormHelper,
	HTMLInputAttributes,
	InputHelper,
} from "@func/input/types";
import {Nullable} from "@func/types";

function inputAttributes<INPUT>(formHelper: FormHelper<INPUT>, name: keyof INPUT): HTMLInputAttributes {
	const i = formHelper[name];
	return {
		name: i.name,
		defaultValue: String(i.defaultValue),
		type: i.type,
		autoComplete: i.autoComplete,
		inputMode: i.inputMode,
	};
}

function formField<T>(form: FormData, input: InputHelper<T>, ...throws: boolean[]): Nullable<T> {
	const entry = form.get(input.name);
	if (!entry || typeof entry !== "string") return input.nullable ? null : input.defaultValue;
	if (entry === "") return input.nullable ? null : input.defaultValue;

	const t = throws.length === 1 ? throws[0] : false;
	const valid = new RegExp(input.regexp).test(entry);

	if (!valid && t)
		throw new Error(`${errInvalidFormValueRegexp}: name=${input.name}, value=${entry}, regexp=${input.regexp}`);

	switch (typeof input.defaultValue) {
		case "string":
			return entry as T;
		case "number":
			if (Number.isNaN(entry)) {
				if (t) throw new Error(`${errInvalidFormValueType}: name=${input.name}, value=${entry}, type=number`);
				return input.defaultValue as T;
			}
			return Number(entry) as T;
		default:
			throw new Error(
				`${errNotFoundInputHelper}: name=${input.name}, value=${entry}, input_default_value_type=${typeof input.defaultValue}`
			);
	}
}

function formFieldAll<INPUT>(form: FormData, helper: FormHelper<INPUT>, ...throws: boolean[]): INPUT {
	const res: any = {};
	for (const name in helper) {
		res[name] = formField(form, helper[name], ...throws);
	}
	return res as INPUT;
}

function initValue<INPUT>(helper: FormHelper<INPUT>): INPUT {
	const res: any = {};
	for (const name in helper) {
		if (!helper[name].defaultValue && helper[name].nullable) {
			res[name] = null;
			continue;
		}
		res[name] = helper[name].defaultValue;
	}
	return res as INPUT;
}

export default {
	formField,
	formFieldAll,
	inputAttributes,
	initValue,
};
