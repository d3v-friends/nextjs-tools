import { LogLevel } from "./types";
export declare class Logger {
    private level;
    private readonly ansiEndKey;
    private readonly ansiBlueKey;
    private readonly ansiRedKey;
    private readonly ansiYellowKey;
    private readonly ansiWhiteKey;
    private readonly ansiGrayKey;
    constructor(level?: LogLevel);
    static getLevel(key?: string): LogLevel;
    setLevel(level: LogLevel): void;
    getLevel(): LogLevel;
    trace(i?: any): void;
    debug(i?: any): void;
    info(i?: any): void;
    warn(i?: any): void;
    error(i?: any): void;
    private isServer;
    private wrapInfo;
    private wrapTrace;
    private wrapError;
    private wrapWarn;
    private wrapDebug;
}
