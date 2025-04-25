import { Action, ActionState, Form } from "./types";
export default function <INPUT, RESPONSE>(handler: (_: any, form: FormData) => Promise<ActionState<INPUT, RESPONSE>>, form: Form<INPUT>): [Awaited<ActionState<INPUT, RESPONSE>>, Action, boolean];
