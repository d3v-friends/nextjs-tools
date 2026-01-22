"use client";

import {ServerAction, ServerActionState} from "./types";
import {useActionState} from "react";

export default function <I, R>(
	serverAction: ServerAction<I, R>
): [Awaited<ServerActionState<I, R>>, (payload: FormData) => void, boolean] {
	return useActionState<ServerActionState<I, R>, FormData>(serverAction, {
		input: null as I,
		response: null as R,
		time: 0,
	});
}
