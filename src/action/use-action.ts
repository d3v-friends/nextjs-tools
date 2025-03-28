"use client";

import {useActionState} from "react";
import {fnInput, FormHelper} from "..";
import {ServerAction, State} from "./types";

export default function <INPUT, RESPONSE>(
	handler: ServerAction<INPUT, RESPONSE>,
	formHelper: FormHelper<INPUT>
): {
	state: Awaited<State<INPUT, RESPONSE>>;
	action: (payload: FormData) => void;
	pending: boolean;
} {
	const [state, action, pending] = useActionState<State<INPUT, RESPONSE>, FormData>(handler, {
		input: fnInput.fn.initInput(formHelper),
		value: fnInput.fn.initValue(formHelper),
	});

	return {
		state,
		action,
		pending,
	};
}
