import fnInput from "./input";
import newAction from "./new-action";
import useAction from "./use-action";

const fnAction = {
	new: newAction,
	use: useAction,
};

export {fnInput, fnAction};
