import React from "react";
import {Panel, PanelTitle} from "@comp";
import Form from "./_form";

export default async function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<PanelTitle>Logger</PanelTitle>
				<Form />
			</Panel>
		</div>
	);
}
