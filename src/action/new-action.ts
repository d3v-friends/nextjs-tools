import {fnInput} from "..";
import {FormHelper} from "../input/types";
import {ServerActionHandler, State} from "./types";

export default async function <INPUT, RESPONSE>(
	form: FormData,
	formHelper: FormHelper<INPUT>,
	handler: ServerActionHandler<INPUT, RESPONSE>
): Promise<State<INPUT, RESPONSE>> {
	const res: State<INPUT, RESPONSE> = {
		input: fnInput.fn.formFieldAll(form, formHelper),
		value: fnInput.fn.formValue(form, formHelper),
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
