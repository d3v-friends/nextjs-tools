"use client";
import React, {ReactNode} from "react";
import {ButtonType, fnVoid, getMouseButtonType} from "@src";

interface Props {
	children?: ReactNode;
	type?: "button" | "submit" | "reset";
	onMouseUp?: (e: React.MouseEvent<HTMLButtonElement>, button: ButtonType) => void;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onCenterClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ({
	children,
	type = "button",
	onMouseUp = fnVoid,
	onClick = fnVoid,
	onCenterClick = fnVoid,
}: Readonly<Props>) {
	return (
		<button
			className="border pl-4 pr-4 pt-2 pb-2 rounded hover:bg-gray-200 active:bg-gray-300"
			type={type}
			onMouseUp={(e) => {
				const mouse = getMouseButtonType(e);
				switch (mouse) {
					case "left":
						onClick(e);
						break;
					case "center":
						onCenterClick(e);
						break;
				}
				onMouseUp(e, getMouseButtonType(e));
			}}>
			{children}
		</button>
	);
}
