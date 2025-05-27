import create from "./create-client";
import exec from "./exec";
import inline from "./inline";
import query from "./query";
declare const _default: {
    exec: typeof exec;
    inline: typeof inline;
    query: typeof query;
    create: typeof create;
};
export default _default;
