import { FormType, ServerActionHandler, ServerActionState } from "./types";
export default function <I extends object, R>(form: FormData, desc: FormType<I>, handler: ServerActionHandler<I, R>): Promise<ServerActionState<I, R>>;
