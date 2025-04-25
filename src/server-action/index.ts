import forms from "./form";
import inputs from "./input";
import parser from "./parser";

export {default as useServerAction} from "./use-server-action";

const fnServerAction = {
	inputs,
	forms,
	parser,
};

export {fnServerAction};
