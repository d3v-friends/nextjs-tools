import { ActionForm, ActionHandler, ActionState } from "..";
export default function <INPUT, RESPONSE>(data: FormData, form: ActionForm<INPUT>, handler: ActionHandler<INPUT, RESPONSE>): Promise<ActionState<INPUT, RESPONSE>>;
