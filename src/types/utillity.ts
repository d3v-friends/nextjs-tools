import {StaticImageData} from "next/image";
import {ReactNode} from "react";

export type Nullable<T> = T | null;
export type Undefined<T> = T | undefined;
export type Unknown<T> = T | unknown;
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
	? ElementType
	: never;
export type FnVoid = () => void;
export type FnBase<T> = (v: T) => void;
export type FnComponent<T> = (v: T) => ReactNode;
export type ImgSrc = string | StaticImageData;
export type Position = {
	top: number;
	left: number;
	width: number;
	height: number;
};

export type Coordinate = {
	top: number;
	left: number;
};

export type DatePeriod = Partial<{
	from: Date;
	to: Date;
}>;
