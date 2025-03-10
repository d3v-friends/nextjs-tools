import fnInput from "func/input";
import {FormHelper} from "func/input/types";
import {ServerActionHandler, State} from "func/action/types";

export default async function <INPUT, RESPONSE>(
	form: FormData,
	formHelper: FormHelper<INPUT>,
	handler: ServerActionHandler<INPUT, RESPONSE>
): Promise<State<INPUT, RESPONSE>> {
	const res: State<INPUT, RESPONSE> = {
		input: fnInput.extractForm(form, formHelper),
	};
	try {
		res.response = await handler(fnInput.extractForm(form, formHelper, true));
		return res;
	} catch (e) {
		if (e instanceof Error) res.error = e;
		else res.error = new Error(JSON.stringify(e));
		return res;
	}
}
