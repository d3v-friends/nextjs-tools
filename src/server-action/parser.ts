import {fnServerAction} from ".";
import {ActionForm, ActionHandler, ActionState, fnLogger} from "..";

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
		res.err = value.err;
		fnLogger.Error("FORM_ACTION", res.string, res.err);
		return res;
	}

	res.value = value.input;

	try {
		res.response = await handler(res.value);
		fnLogger.Trace("FORM_ACTION", res.string, res.response);
		return res;
	} catch (e) {
		if (e instanceof Error) res.err = e.message;
		else res.err = JSON.stringify(e);

		fnLogger.Error("FORM_ACTION", res.string, res.err);

		return res;
	}
}
