import { fnReflect } from "..";
import { errNotFoundInputHelper } from "./types";
function mergeOpts(origin, ...opts) {
    if (opts.length === 0)
        return origin;
    return fnReflect.merge(origin, opts[0]);
}
function username(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: "",
            defaultValue: "",
            regexp: "^[a-z][a-z|0-9]{3,20}$",
            invalidMessage: "아이디를 확인하여 주십시오.",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "string",
            valueFormat: "text",
        }, ...opts);
    };
}
function password(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: "",
            defaultValue: "",
            regexp: "^[a-z0-9A-Z~`!@#$%^&*\(\)\\-_=+\\[{\\]}\\\\\|;:'\",<.>/?]{7,20}$",
            invalidMessage: "비밀번호를 확인하여 주십시오.",
            type: "password",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "string",
            valueFormat: "text",
        }, ...opts);
    };
}
function otp(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: "",
            regexp: "^[0-9]{6}$",
            invalidMessage: "OTP 를 확인하여 주십시오. (6자리 숫자)",
            defaultValue: "",
            type: "number",
            autoComplete: "off",
            inputMode: "numeric",
            nullable: false,
            valueType: "string",
            valueFormat: "text",
        }, ...opts);
    };
}
function ip(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: "",
            regexp: "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b",
            invalidMessage: "아이피를 확인하여 주십시오. (예: 0.0.0.0)",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "string",
            valueFormat: "text",
        }, ...opts);
    };
}
function lowerSnakeCase(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: "",
            regexp: "^[a-z0-9_]+$",
            invalidMessage: "입력값을 확인하여 주십시오. (예: lower_snake_case)",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "string",
            valueFormat: "text",
        }, ...opts);
    };
}
function port(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: 0,
            regexp: "^[a-z0-9_]+$",
            invalidMessage: "포트를 확인하여 주십시오.",
            defaultValue: "0",
            type: "number",
            autoComplete: "on",
            inputMode: "numeric",
            nullable: false,
            valueType: "number",
            valueFormat: "text",
        }, ...opts);
    };
}
function string(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: "",
            regexp: "",
            invalidMessage: "",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "string",
            valueFormat: "text",
        }, ...opts);
    };
}
function number(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: 0,
            regexp: "^[0-9]*$",
            invalidMessage: "",
            defaultValue: "0",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "number",
            valueFormat: "text",
        }, ...opts);
    };
}
function boolean(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: false,
            regexp: "^(true|false)$",
            invalidMessage: "",
            defaultValue: "false",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "boolean",
            valueFormat: "text",
        }, ...opts);
    };
}
function objectId(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: "",
            regexp: "^[a-z0-9]{24}$",
            invalidMessage: "아이디를 확인하여 주십시오.",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "string",
            valueFormat: "text",
        }, ...opts);
    };
}
function strings(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: [],
            regexp: "",
            invalidMessage: "",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "string",
            valueFormat: "csv",
        }, ...opts);
    };
}
function numbers(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: [],
            regexp: "",
            invalidMessage: "",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "number",
            valueFormat: "csv",
        }, ...opts);
    };
}
function booleans(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            returnValue: [],
            regexp: "",
            invalidMessage: "",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
            valueType: "boolean",
            valueFormat: "csv",
        }, ...opts);
    };
}
function form(opts) {
    const res = {};
    for (const name in opts) {
        if (!opts.hasOwnProperty(name))
            throw new Error(`${errNotFoundInputHelper}: name=${name}`);
        res[name] = opts[name](name);
    }
    return res;
}
export default {
    username,
    password,
    ip,
    port,
    otp,
    string,
    number,
    objectId,
    boolean,
    lowerSnakeCase,
    form,
    strings,
    numbers,
    booleans,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sSUFBSSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxzQkFBc0IsRUFBMEQsTUFBTSxTQUFTLENBQUM7QUFFeEcsU0FBUyxTQUFTLENBQUksTUFBc0IsRUFBRSxHQUFHLElBQStCO0lBQy9FLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUM7SUFDckMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsR0FBRyxJQUFvQztJQUN4RCxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDZixPQUFPLFNBQVMsQ0FDZjtZQUNDLElBQUk7WUFDSixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsY0FBYyxFQUFFLGlCQUFpQjtZQUNqQyxJQUFJLEVBQUUsTUFBTTtZQUNaLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLFFBQVE7WUFDbkIsV0FBVyxFQUFFLE1BQU07U0FDbkIsRUFDRCxHQUFHLElBQUksQ0FDUCxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEdBQUcsSUFBb0M7SUFDeEQsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2YsT0FBTyxTQUFTLENBQ2Y7WUFDQyxJQUFJO1lBQ0osV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsa0VBQWtFO1lBQzFFLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMs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