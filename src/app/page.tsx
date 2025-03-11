"use client";
import sampleAction from "@app/action";
import {sampleForm} from "@app/form";
import {fnAction, fnInput, NextPageProps} from "src/index";

export default function ({}: NextPageProps) {
	const {pending, action, state} = fnAction.use(sampleAction, sampleForm);
	const {username, password, boolean} = state.input;

	return (
		<form action={action}>
			<input
				{...fnInput.extractInputAttributes(sampleForm, "username")}
				defaultValue={username}
			/>
			<input
				{...fnInput.extractInputAttributes(sampleForm, "password")}
				defaultValue={password}
			/>
			<input
				{...fnInput.extractInputAttributes(sampleForm, "boolean")}
				defaultValue={boolean}
			/>

			<input {...fnInput.extractInputHelper(sampleForm, "password")}/>
			<button
				type="submit"
				disabled={pending}>
				확인
			</button>
			<p>username: {username}</p>
			<p>password: {password}</p>
			<p>boolean: {boolean}</p>
			{state.error && <p>error {state.error.message}</p>}
		</form>
	);
}
