import { Action, Form, State } from "./types";
export default function <INPUT, RESPONSE>(handler: (_: any, form: FormData) => Promise<State<INPUT, RESPONSE>>, form: Form<INPUT>): [Awaited<State<INPUT, RESPONSE>>, Action, boolean];
