import React, {ReactNode} from "react";

interface Props {
	children?: ReactNode;
	right?: ReactNode;
	className?: string;
}

export default function ({children, right, className = "mb-3"}: Readonly<Props>) {
	return (
		<div className={className}>
			<div className="flex items-center">
				<span className="text-2xl font-bold">{children}</span>
				{right && <div className="grow">{right}</div>}
			</div>
		</div>
	);
}
