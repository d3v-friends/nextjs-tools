import React, {ReactNode} from "react";
import {concat} from "@src";

interface Props {
	children?: ReactNode;
}

export default function ({children}: Readonly<Props>) {
	return <section className={concat("p-2 border shadow-2xl shadow-[rgba(0,0,0,0.2)]")}>{children}</section>;
}
