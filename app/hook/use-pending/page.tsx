"use client";
import React from "react";
import {usePending} from "@src";
import SleepAction from "./_action/sleep";

export default function () {
	const [pending, sleep] = usePending(SleepAction);

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>usePending</h3>
				<div className="flex items-center">
					<div className={"w-100"}>{pending ? "false" : "true"}</div>
					<button
						disabled={pending}
						onClick={() =>
							sleep(2000, "message")
								.then((res) => console.log(res))
								.catch((e) => console.error(e))
						}>
						Button
					</button>
				</div>
			</section>
		</div>
	);
}
