import { UnwrapForm } from "./..";
export default function <F extends object>(initial: UnwrapForm<F>): [UnwrapForm<F>, import("react").Dispatch<import("react").SetStateAction<UnwrapForm<F>>>];
