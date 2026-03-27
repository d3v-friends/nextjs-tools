"use client";
import React from "react";
import {modal} from "@src";

export default function () {
	const onClickAlert = () => {
		modal((unmount) => (
			<div>
				<h5>alert</h5>
				<button
					className="mr-2"
					onClick={() => unmount(false)}>
					cancel
				</button>
				<button
					onClick={() => unmount(true)}
					autoFocus>
					ok
				</button>
			</div>
		))
			.ok(() => {
				alert("ok");
			})
			.error();
	};

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h5>btModal</h5>
				<button onClick={onClickAlert}>alert</button>
			</section>
		</div>
	);
}
