import { LogLevel } from "./types";
export declare class Logger {
    readonly level: LogLevel;
    constructor(level?: LogLevel);
    static getLevel(key?: string): LogLevel;
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
