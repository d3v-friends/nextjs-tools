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
            defaultValue: "",
            regexp: "^[a-z][a-z|0-9]{3,20}$",
            invalidMessage: "아이디를 확인하여 주십시오.",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
        }, ...opts);
    };
}
function password(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            defaultValue: "",
            regexp: "^[a-z0-9A-Z~`!@#$%^&*\(\)\\-_=+\\[{\\]}\\\\\|;:'\",<.>/?]{7,20}$",
            invalidMessage: "비밀번호를 확인하여 주십시오.",
            type: "password",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
        }, ...opts);
    };
}
function otp(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            regexp: "^[0-9]{6}$",
            invalidMessage: "OTP 를 확인하여 주십시오. (6자리 숫자)",
            defaultValue: "",
            type: "number",
            autoComplete: "off",
            inputMode: "numeric",
            nullable: false,
        }, ...opts);
    };
}
function ip(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            regexp: "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b",
            invalidMessage: "아이피를 확인하여 주십시오. (예: 0.0.0.0)",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
        }, ...opts);
    };
}
function lowerSnakeCase(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            regexp: "^[a-z0-9_]+$",
            invalidMessage: "입력값을 확인하여 주십시오. (예: lower_snake_case)",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
        }, ...opts);
    };
}
function port(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            regexp: "^[a-z0-9_]+$",
            invalidMessage: "포트를 확인하여 주십시오.",
            defaultValue: 0,
            type: "number",
            autoComplete: "on",
            inputMode: "numeric",
            nullable: false,
        }, ...opts);
    };
}
function string(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            regexp: "",
            invalidMessage: "",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
        }, ...opts);
    };
}
function number(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            regexp: "^[0-9]*$",
            invalidMessage: "",
            defaultValue: 0,
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
        }, ...opts);
    };
}
function boolean(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            regexp: "^(true|false)$",
            invalidMessage: "",
            defaultValue: "false",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
        }, ...opts);
    };
}
function objectId(...opts) {
    return (name) => {
        return mergeOpts({
            name,
            regexp: "^[a-z0-9]{24}$",
            invalidMessage: "아이디를 확인하여 주십시오.",
            defaultValue: "",
            type: "text",
            autoComplete: "on",
            inputMode: "text",
            nullable: false,
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sSUFBSSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxzQkFBc0IsRUFBc0UsTUFBTSxTQUFTLENBQUM7QUFFcEgsU0FBUyxTQUFTLENBQUksTUFBc0IsRUFBRSxHQUFHLElBQStCO0lBQy9FLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUM7SUFDckMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsR0FBRyxJQUFvQztJQUN4RCxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDZixPQUFPLFNBQVMsQ0FDZjtZQUNDLElBQUk7WUFDSixZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLGNBQWMsRUFBRSxpQkFBaUI7WUFDakMsSUFBSSxFQUFFLE1BQU07WUFDWixZQUFZLEVBQUUsSUFBSTtZQUNsQixTQUFTLEVBQUUsTUFBTTtZQUNqQixRQUFRLEVBQUUsS0FBSztTQUNmLEVBQ0QsR0FBRyxJQUFJLENBQ1AsQ0FBQztJQUNILENBQUMsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxHQUFHLElBQW9DO0lBQ3hELE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNmLE9BQU8sU0FBUyxDQUNmO1lBQ0MsSUFBSTtZQUNKLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxrRUFBa0U7WUFDMUUsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxJQUFJLEVBQUUsVUFBVTtZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixTQUFTLEVBQUUsTUFBTTtZQUNqQixRQUFRLEVBQUUsS0FBSztTQUNm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