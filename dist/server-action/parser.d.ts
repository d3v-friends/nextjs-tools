import { ActionHandler, Form, State } from "./types";
export default function <INPUT, RESPONSE>(data: FormData, form: Form<INPUT>, handler: ActionHandler<INPUT, RESPONSE>): Promise<State<INPUT, RESPONSE>>;
