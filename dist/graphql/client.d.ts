import { GraphQLClient, Header } from "./types";
export default function (host: string, header?: Header): Promise<GraphQLClient>;
