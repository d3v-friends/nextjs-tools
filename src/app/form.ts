import {fnInput} from "src/index";

export const sampleForm = fnInput.field.form({
	objectId: fnInput.field.objectId(),
	username: fnInput.field.username(),
	password: fnInput.field.password(),
	boolean: fnInput.field.boolean({
		nullable: true,
	}),
});
