export interface Options {
    iterations: number;
    keylen: number;
    digest: string;
}
export default function (password: string, salt: string, { iterations, keylen, digest }?: Partial<Options>): Promise<string>;
