import {Logger} from "@root/logger";
import {fnServerAction} from ".";
import {ActionForm, ActionHandler, ActionState} from "..";

export default async function <INPUT, RESPONSE>(
	data: FormData,
	form: ActionForm<INPUT>,
	handler: ActionHandler<INPUT, RESPONSE>
): Promise<ActionState<INPUT, RESPONSE>> {
	const res: ActionState<INPUT, RESPONSE> = {
		time: new Date().getTime(),
		string: fnServerAction.forms.string(data, form),
		value: fnServerAction.forms.defaultValue(form),
	};

	const value = fnServerAction.forms.value(data, form);
	if (value.err) {
		Logger.Error("FORM_ACTION", res.string, res.err);
		res.err = value.err;
		return res;
	}

	res.value = value.input;

	try {
		res.response = await handler(res.value);
		Logger.Trace("FORM_ACTION", res.string, res.response);
		return res;
	} catch (e) {
		if (e instanceof Error) res.err = e.message;
		else res.err = JSON.stringify(e);

		Logger.Error("FORM_ACTION", res.string, res.err);

		return res;
	}
}
