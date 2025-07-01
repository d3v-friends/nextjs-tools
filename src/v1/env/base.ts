const errNoEnvValue = "no_env_value";
const errInvalidNumberEnvValue = "invalid_number_env_value";

export function string(prefix: string, key: string, ...defaults: string[]): string {
	const v = getValue(prefix, key);
	if (v) return v;
	if (defaults.length === 0) throw new Error(`${errNoEnvValue}: key=${key}`);
	return defaults[0];
}

export function number(prefix: string, key: string, ...defaults: number[]): number {
	const v = getValue(prefix, key);
	if (!v) {
		if (defaults.length === 1) return defaults[0];
		throw new Error(`${errNoEnvValue}: key=${key}`);
	}

	if (Number.isNaN(v)) throw new Error(`${errInvalidNumberEnvValue}: key=${key}, value=${v}`);
	return Number(v);
}

export function boolean(prefix: string, key: string, ...defaults: boolean[]): boolean {
	const v = getValue(prefix, key);
	if (!v) {
		if (defaults.length === 1) return defaults[0];
		else throw new Error(`${errNoEnvValue}: key=${key}`);
	}
	return v === "true";
}

function getValue(prefix: string, key: string): string {
	if (prefix) return key = `${prefix}_${key}`;
	return process.env[key] || "";
}