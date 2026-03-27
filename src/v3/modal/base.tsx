"use client";

import {CSSProperties, ReactNode} from "react";
import {createRoot} from "react-dom/client";

export type ModalFC = (unmount: (value: boolean) => void) => ReactNode;

export interface ModalOptions {
	defaultBackgroundStyle: boolean;
	backgroundClassName: string;
	center: boolean;
	escape: boolean;
}

export default function (
	fc: ModalFC,
	{defaultBackgroundStyle = true, backgroundClassName = "", center = true, escape = true}: Partial<ModalOptions> = {}
): Promise<boolean> {
	return new Promise((resolve) => {
		const cont = document.createElement("div");
		cont.style.position = "fixed";
		cont.style.top = "0";
		cont.style.left = "0";
		cont.style.width = "100vw";
		cont.style.height = "100vh";

		if (defaultBackgroundStyle) {
			cont.style.backgroundColor = "rgba(0,0,0,0.2)";
			cont.style.backdropFilter = "blur(2px) grayscale(40%)";
		}

		cont.className = backgroundClassName;

		// 스크롤 금지
		document.body.style.overflow = "hidden";
		document.body.appendChild(cont);

		const root = createRoot(cont);

		const unmount = (value: boolean) => {
			root.unmount();
			cont.remove();
			document.body.style.overflow = "unset";
			if (escape) window.addEventListener("keydown", onEscape);

			resolve(value);
		};

		const onEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				unmount(false);
			}
		};

		if (escape) {
			window.addEventListener("keydown", onEscape);
		}

		const style: CSSProperties = {
			width: "100%",
			height: "100%",
		};

		if (center) {
			style.display = "flex";
			style.justifyContent = "center";
			style.alignItems = "center";
		}

		root.render(<div style={style}>{fc(unmount)}</div>);
	});
}
