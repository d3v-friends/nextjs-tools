import {fnServerAction} from "@root";

export default fnServerAction.forms.createForm({
	username: fnServerAction.inputs.string({}),
	numb: fnServerAction.inputs.number({}),
});
