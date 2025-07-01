import concat from "./concat";
import trim from "./trim";

// value && "" 등의 등차식을 방지하기 위해서 반드시 string 값만 넣을 수 있도록 구성한다.
// null 입력시 string 연산하다가 순서가 바뀌어 hydration waring 이 발생 할 수 있다.
export default function (...str: string[]): string {
	let res = concat(...str);
	return trim(res);
}
