"use server";

import {boolean as fnBoolean, number as fnNumber, string as fnString} from "./base";

export async function string(key: string, ...defaults: string[]): Promise<string> {
	return fnString("", key, ...defaults);
}

export async function number(key: string, ...defaults: number[]): Promise<number> {
	return fnNumber("", key, ...defaults);
}

export async function boolean(key: string, ...defaults: boolean[]): Promise<boolean> {
	return fnBoolean("", key, ...defaults);
}
