"use client";

import {fnInput} from "@func/action/index";
import {FormHelper, ServerAction, State} from "@func/action/types";
import {useActionState} from "react";

export default function <INPUT, RESPONSE>(
	handler: ServerAction<INPUT, RESPONSE>,
	formHelper: FormHelper<INPUT>
): {
	state: Awaited<State<INPUT, RESPONSE>>;
	action: (payload: FormData) => void;
	pending: boolean;
} {
	const [state, action, pending] = useActionState<State<INPUT, RESPONSE>, FormData>(handler, {
		input: fnInput.newInitValue(formHelper),
	});

	return {
		state,
		action,
		pending,
	};
}
