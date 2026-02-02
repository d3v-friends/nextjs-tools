import { FormType } from "./types";
export default function unwrapForm<T extends object>(form: FormType<T>, args: T): Promise<T>;
