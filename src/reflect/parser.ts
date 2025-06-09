import {Nullable} from "@root";

const parser = {
	number: (v: string | number | any, initValue: number): number => {
		if (Number.isNaN(Number(v))) return initValue;
		return Number(v);
	},
	numberNull: (v: string | number): Nullable<number> => {
		if (Number.isNaN(Number(v))) return null;
		return Number(v);
	},
};

export default parser;
