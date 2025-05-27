import { Client } from "./client";
import { Header } from "./types";
interface Args {
    host?: string;
    hostEnvKey?: string;
    header?: Header;
}
export default function (args: Args): Promise<Client>;
export {};
