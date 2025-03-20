import { ServerAction, State } from "../action/types";
import { FormHelper } from "../input/types";
export default function <INPUT, RESPONSE>(handler: ServerAction<INPUT, RESPONSE>, formHelper: FormHelper<INPUT>): {
    state: Awaited<State<INPUT, RESPONSE>>;
    action: (payload: FormData) => void;
    pending: boolean;
};
