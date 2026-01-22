"use client";
import React, {useRef, useState} from "react";
import {useServerAction} from "@src";
import Action from "./action";
import Form from "./form";

export default function () {
	const [formData, setFormData] = useState("");
	const [state, action, pending] = useServerAction(Action);
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<>
			<section>
				<h3>Form</h3>
				<form
					action={action}
					ref={formRef}
					onChange={(e) => {
						setFormData(getFormData(e.currentTarget));
					}}>
					<input
						name={Form.username.name}
						placeholder="username"
					/>

					<button
						type="submit"
						disabled={pending}>
						submit
					</button>
				</form>
			</section>

			<section>
				<h3>FormData</h3>
				<article>{formData}</article>

				<h3>State</h3>
				<article>{JSON.stringify(state)}</article>
			</section>
		</>
	);
}

function getFormData(data: HTMLFormElement): string {
	const form = new FormData(data);

	const res: any = {};

	for (const name of form.keys()) {
		const entry = form.get(name);
		if (!entry) {
			res[name] = null;
		}

		if (typeof entry !== "string") {
			res[name] = JSON.stringify(entry);
		}

		res[name] = entry;
	}

	return JSON.stringify(res);
}
