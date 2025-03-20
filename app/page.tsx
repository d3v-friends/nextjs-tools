"use client";
import sampleAction from "@app/action";
import {sampleForm} from "@app/form";
import {fnAction, fnInput, NextPageProps} from "src/index";

export default function ({}: NextPageProps) {
	const {pending, action, state} = fnAction.use(sampleAction, sampleForm);
	const {username, password, boolean, objectId} = state.input;

	return (
		<form action={action}>
			<input
				{...fnInput.fn.inputAttributes(sampleForm.username)}
				defaultValue={username}
			/>
			<input
				{...fnInput.fn.inputAttributes(sampleForm.password)}
				defaultValue={password}
			/>
			<input
				{...fnInput.fn.inputAttributes(sampleForm.boolean)}
				defaultValue={boolean}
			/>

			<input
				{...fnInput.fn.inputAttributes(sampleForm.objectId)}
				defaultValue={objectId}
			/>

			<button
				type="submit"
				disabled={pending}>
				확인
			</button>
			<p>username: {username}</p>
			<p>password: {password}</p>
			<p>boolean: {boolean}</p>
			<p>objectId: {objectId}</p>
			{state.error && <p>error {state.error.message}</p>}
		</form>
	);
}
