export type State<INPUT, RESPONSE> = {
	input: INPUT;
	response?: RESPONSE;
	error?: Error;
};

export type ServerAction<INPUT, RESPONSE> = (_: any, form: FormData) => Promise<State<INPUT, RESPONSE>>;

export type ServerActionHandler<INPUT, RESPONSE> = (input: INPUT) => Promise<RESPONSE>;
