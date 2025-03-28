import {fnInput} from "@root";

export const sampleForm = fnInput.field.form({
	objectId: fnInput.field.objectId(),
	username: fnInput.field.username(),
	password: fnInput.field.password(),
	boolean: fnInput.field.boolean(),
	opts: fnInput.field.strings(),
});
