import { errNotFoundInputHelper, } from "../input/types";
import fnReflect from "../reflect";
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
            defaultValue: "",
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
// todo decimal 관련 regexp 보완하기
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuYy9pbnB1dC9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04sc0JBQXNCLEdBT3RCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxTQUFTLE1BQU0sZUFBZSxDQUFDO0FBRXRDLFNBQVMsU0FBUyxDQUFJLE1BQXNCLEVBQUUsR0FBRyxJQUErQjtJQUMvRSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sTUFBTSxDQUFDO0lBQ3JDLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEdBQUcsSUFBb0M7SUFDeEQsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2YsT0FBTyxTQUFTLENBQ2Y7WUFDQyxJQUFJO1lBQ0osWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxjQUFjLEVBQUUsaUJBQWlCO1lBQ2pDLElBQUksRUFBRSxNQUFNO1lBQ1osWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLE1BQU07WUFDakIsUUFBUSxFQUFFLEtBQUs7U0FDZixFQUNELEdBQUcsSUFBSSxDQUNQLENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsR0FBRyxJQUFvQztJQUN4RCxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDZixPQUFPLFNBQVMsQ0FDZjtZQUNDLElBQUk7WUFDSixZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsa0VBQWtFO1lBQzFFLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsSUFBSSxFQUFFLFVBQVU7WUFDaEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLE1BQU07WUFDakIsUUFB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