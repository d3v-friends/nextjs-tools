import concat from "./concat";
import trim from "./trim";

export default function (...str: string[]): string {
	let res = concat(...str);
	return trim(res);
}
