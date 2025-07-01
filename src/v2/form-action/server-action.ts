"use server";

import {getLogger} from "@root";
import fnForm from "./form";
import {ActionState, Form, FormValue, ServerAction} from "./types";

export default async function <I extends FormValue, R>(
	data: FormData,
	form: Form<I>,
	handler: ServerAction<I, R>
): Promise<ActionState<I, R>> {
	const logger = await getLogger();

	const res: ActionState<I, R> = {
		time: new Date().getTime(),
		string: fnForm.getString(form, data),
	};

	const {value, error} = fnForm.getValue(form, data);
	if (error) {
		res.error = error.message;
		logger.error("FORM_ACTION", res.string, res.error);
		return res;
	}

	try {
		res.response = await handler(value as I);
		logger.trace("FORM_ACTION", res.string, res.response);
		return res;
	} catch (e) {
		if (e instanceof Error) res.error = e.message;
		else res.error = JSON.stringify(e);
		logger.error("FORM_ACTION", res.string, res.error);
		return res;
	}
}
