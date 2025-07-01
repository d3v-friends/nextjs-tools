import { ActionForm, ActionState } from "..";
type Action = (payload: FormData) => void;
export default function <INPUT, RESPONSE>(handler: (_: any, form: FormData) => Promise<ActionState<INPUT, RESPONSE>>, form: ActionForm<INPUT>): [Awaited<ActionState<INPUT, RESPONSE>>, Action, boolean];
export {};
