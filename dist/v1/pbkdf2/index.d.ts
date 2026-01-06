export interface SaltingArgs {
    salt: string;
    password: string;
    iterations?: number;
    keylen?: number;
    digest?: string;
}
declare function salting({ salt, password, iterations, keylen, digest }: SaltingArgs): string;
declare function newSalt(): string;
declare function run(password: string): {
    salt: string;
    saltedPassword: string;
};
declare const fnPbkdf2: {
    salting: typeof salting;
    newSalt: typeof newSalt;
    run: typeof run;
};
export { fnPbkdf2 };
