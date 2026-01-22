import { ServerAction, ServerActionState } from "./types";
export default function <I, R>(serverAction: ServerAction<I, R>): [Awaited<ServerActionState<I, R>>, (payload: FormData) => void, boolean];
