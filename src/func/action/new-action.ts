import {ServerActionHandler, State} from "@func/action/types";
import fnInput from "@func/input";
import {FormHelper} from "@func/input/types";

export default async function <INPUT, RESPONSE>(
	form: FormData,
	formHelper: FormHelper<INPUT>,
	handler: ServerActionHandler<INPUT, RESPONSE>
): Promise<State<INPUT, RESPONSE>> {
	const res: State<INPUT, RESPONSE> = {
		input: fnInput.fn.formFieldAll(form, formHelper),
	};
	try {
		res.response = await handler(fnInput.fn.formFieldAll(form, formHelper, true));
		return res;
	} catch (e) {
		if (e instanceof Error) res.error = e;
		else res.error = new Error(JSON.stringify(e));
		return res;
	}
}
