import exec from "./exec";
import inline from "./inline";
import query from "./query";
declare const fnGraphQL: {
    exec: typeof exec;
    inline: typeof inline;
    query: typeof query;
};
export { fnGraphQL };
