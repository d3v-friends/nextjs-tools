"use client";
import {useActionState} from "react";
import {fnServerAction} from "./index";
import {Action, ActionState, Form} from "./types";

export default function <INPUT, RESPONSE>(
	handler: (_: any, form: FormData) => Promise<ActionState<INPUT, RESPONSE>>,
	form: Form<INPUT>
): [Awaited<ActionState<INPUT, RESPONSE>>, Action, boolean] {
	return useActionState<ActionState<INPUT, RESPONSE>, FormData>(handler, {
		time: 0,
		string: fnServerAction.forms.defaultString(form),
		value: fnServerAction.forms.defaultValue(form),
	});
}
