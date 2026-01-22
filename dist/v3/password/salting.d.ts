interface SaltingArgs {
    salt: string;
    password: string;
    iterations?: number;
    keylen?: number;
    digest?: string;
}
export default function ({ salt, password, iterations, keylen, digest, }: SaltingArgs): Promise<string>;
export {};
