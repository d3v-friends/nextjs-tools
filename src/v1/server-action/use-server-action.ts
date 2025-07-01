"use client";
import {useActionState} from "react";
import {ActionForm, ActionState, fnServerAction} from "..";

type Action = (payload: FormData) => void;

export default function <INPUT, RESPONSE>(
	handler: (_: any, form: FormData) => Promise<ActionState<INPUT, RESPONSE>>,
	form: ActionForm<INPUT>
): [Awaited<ActionState<INPUT, RESPONSE>>, Action, boolean] {
	return useActionState<ActionState<INPUT, RESPONSE>, FormData>(handler, {
		time: 0,
		string: fnServerAction.forms.defaultString(form),
		value: fnServerAction.forms.defaultValue(form),
	});
}
