import { FormHelper } from "func/input/types";
import { ServerActionHandler, State } from "func/action/types";
export default function <INPUT, RESPONSE>(form: FormData, formHelper: FormHelper<INPUT>, handler: ServerActionHandler<INPUT, RESPONSE>): Promise<State<INPUT, RESPONSE>>;
