import {NextPageProps} from "@root";
import Link from "next/link";
import React from "react";

export default function ({}: NextPageProps) {
	return (
		<>
			<Link href={"/form"}>form</Link>
		</>
	);
}
