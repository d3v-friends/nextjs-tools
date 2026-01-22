import React from "react";
import Form from "./_form";

export default async function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<h1>server action</h1>
			<Form />
		</div>
	);
}
