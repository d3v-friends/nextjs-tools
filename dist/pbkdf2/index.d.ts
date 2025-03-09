declare function salting({ salt, password }: {
    salt: string;
    password: string;
}): string;
declare function newSalt(): string;
declare const _default: {
    salting: typeof salting;
    newSalt: typeof newSalt;
};
export default _default;
