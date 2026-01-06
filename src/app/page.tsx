import {NextPageProps} from "@root";
import Link from "next/link";
import React from "react";

export default function ({}: NextPageProps) {
	return (
		<>
			<div className="grid grid-cols-1 gap-4">
				<Link href={"/v1/server-action"}>v1 server-action</Link>
				<Link href={"/v2/form-action"}>v2 form-action</Link>
			</div>
		</>
	);
}
