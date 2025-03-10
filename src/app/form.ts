import {fnInput} from "index";

export const sampleForm = fnInput.newForm({
	username: fnInput.username(),
	password: fnInput.password(),
	boolean: fnInput.boolean({
		nullable: true,
	}),
});
