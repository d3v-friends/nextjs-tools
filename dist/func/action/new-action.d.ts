import { ServerActionHandler, State } from "../action/types";
import { FormHelper } from "../input/types";
export default function <INPUT, RESPONSE>(form: FormData, formHelper: FormHelper<INPUT>, handler: ServerActionHandler<INPUT, RESPONSE>): Promise<State<INPUT, RESPONSE>>;
