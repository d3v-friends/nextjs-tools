"use client";
import {useActionState} from "react";
import fnForm from "./form";
import {ActionState, Form, FormValue} from "./types";

type Action = (payload: FormData) => void;

export default function <I extends FormValue, R>(
	handler: (_: any, form: FormData) => Promise<ActionState<I, R>>,
	form: Form<I>
): [Awaited<ActionState<I, R>>, Action, boolean] {
	return useActionState<ActionState<I, R>, FormData>(handler, {
		time: 0,
		string: fnForm.getDefaultString(form),
	});
}
