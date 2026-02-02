"use client";
import React from "react";
import Form from "./form";
import {useFormState} from "@src";
import Action from "./action";

export default function () {
	const [args, onChangeArgs] = useFormState<typeof Form>({
		username: "",
		password: "",
	});

	const onSubmit = () => {
		Action(args)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
	};

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>Server form</h3>
				<input
					placeholder="username"
					value={args.username}
					onChange={(e) => onChangeArgs({...args, username: e.target.value})}
				/>
				<input
					placeholder="password"
					value={args.password}
					onChange={(e) => onChangeArgs({...args, password: e.target.value})}
				/>
				<button onClick={onSubmit}>Submit</button>
			</section>
		</div>
	);
}
