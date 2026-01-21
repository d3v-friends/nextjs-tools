import React from "react";
import {ButtonType} from "./types";

export default function (e: React.MouseEvent<HTMLButtonElement>): ButtonType {
	switch (e.button) {
		case 0:
			return "left";
		case 1:
			return "center";
		case 2:
			return "right";
		default:
			return "left";
	}
}
