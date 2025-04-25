"use client";
import {useActionState} from "react";
import {fnServerAction} from "./index";
import {Action, Form, State} from "./types";

export default function <INPUT, RESPONSE>(
	handler: (_: any, form: FormData) => Promise<State<INPUT, RESPONSE>>,
	form: Form<INPUT>
): [Awaited<State<INPUT, RESPONSE>>, Action, boolean] {
	return useActionState<State<INPUT, RESPONSE>, FormData>(handler, {
		time: 0,
		string: fnServerAction.forms.defaultString(form),
		value: fnServerAction.forms.defaultValue(form),
	});
}
