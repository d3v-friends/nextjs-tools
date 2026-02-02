"use server";
import {FormType} from "./types";

export default async function unwrapForm<T extends object>(form: FormType<T>, args: T): Promise<T> {
	for (const key in form) {
		if (!form[key].validate(args[key] as any)) {
			throw new Error(`invalid_value: key=${key}, value=${args[key]}`);
		}
	}
	return args;
}
