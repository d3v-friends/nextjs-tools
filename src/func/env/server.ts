"use server";

import {string as fnString, number as fnNumber, boolean as fnBoolean} from "./env";

export async function string(key: string, ...defaults: string[]): Promise<string> {
	return fnString("", key, ...defaults);
}

export async function number(key: string, ...defaults: number[]): Promise<number> {
	return fnNumber("", key, ...defaults);
}

export async function boolean(key: string, ...defaults: boolean[]): Promise<boolean> {
	return fnBoolean("", key, ...defaults);
}