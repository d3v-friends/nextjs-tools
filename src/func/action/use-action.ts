"use client";

import {ServerAction, State} from "@func/action/types";
import fnInput from "@func/input";
import {FormHelper} from "@func/input/types";
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
		input: fnInput.fn.initValue(formHelper),
	});

	return {
		state,
		action,
		pending,
	};
}
