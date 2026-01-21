"use server";
import React from "react";
import {Panel} from "@comp";

export default async function () {
	return (
		<div className="grid grid-cols-1 gap-4">
			<Panel>abcd</Panel>
		</div>
	);
}
