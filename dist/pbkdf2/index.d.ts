declare function salting({ salt, password }: {
    salt: string;
    password: string;
}): string;
declare function newSalt(): string;
declare const fnPbkdf2: {
    salting: typeof salting;
    newSalt: typeof newSalt;
};
export { fnPbkdf2 };
