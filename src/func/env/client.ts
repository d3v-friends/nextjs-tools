"use client";
import {boolean as fnBoolean, number as fnNumber, string as fnString} from "@func/env/base";

export function string(key: string, ...defaults: string[]): string {
	return fnString("NEXT_PUBLIC_", key, ...defaults);
}

export function number(key: string, ...defaults: number[]): number {
	return fnNumber("NEXT_PUBLIC_", key, ...defaults);
}

export function boolean(key: string, ...defaults: boolean[]): boolean {
	return fnBoolean("NEXT_PUBLIC_", key, ...defaults);
}
