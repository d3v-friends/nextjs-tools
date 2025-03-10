"use client";
import {string as fnString, number as fnNumber, boolean as fnBoolean} from "func/env/env";

export function string(key: string, ...defaults: string[]): string {
	return fnString("NEXT_PUBLIC", key, ...defaults);
}

export function number(key: string, ...defaults: number[]): number {
	return fnNumber("NEXT_PUBLIC", key, ...defaults);
}

export function boolean(key: string, ...defaults: boolean[]): boolean {
	return fnBoolean("NEXT_PUBLIC", key, ...defaults);
}