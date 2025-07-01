"use client";
import {NextPageProps, useServerAction} from "@root";
import React from "react";

import Action from "./action";
import Form from "./form";

export default function ({}: NextPageProps) {
	const [state, action, pending] = useServerAction(Action, Form);
	const {username, numb} = state.string;
	return (
		<>
			<form action={action}>
				<input
					name={Form.username.name}
					defaultValue={username}
					placeholder="username"
				/>
				<input
					name={Form.numb.name}
					defaultValue={numb}
					placeholder="numb"
				/>
				<button
					type="submit"
					disabled={pending}>
					submit
				</button>
			</form>
			<p>state: {JSON.stringify(state)}</p>
		</>
	);
}
