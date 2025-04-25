import { ActionHandler, ActionState, Form } from "./types";
export default function <INPUT, RESPONSE>(data: FormData, form: Form<INPUT>, handler: ActionHandler<INPUT, RESPONSE>): Promise<ActionState<INPUT, RESPONSE>>;
