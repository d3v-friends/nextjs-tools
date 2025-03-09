import { fnReflect } from "..";
import { errInvalidFormValueRegexp, errInvalidFormValueType, errNotFoundInputHelper, } from "./types";
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
function mergeOpts(origin, ...opts) {
    if (opts.length === 0)
        return origin;
    return fnReflect.merge(origin, opts[0]);
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
function newForm(opts) {
    const res = {};
    for (const name in opts) {
        if (!opts.hasOwnProperty(name))
            throw new Error(`${errNotFoundInputHelper}: name=${name}`);
        res[name] = opts[name](name);
    }
    return res;
}
function extractInputAttributes(formHelper, name) {
    const i = formHelper[name];
    return {
        name: i.name,
        defaultValue: String(i.defaultValue),
        type: i.type,
        autoComplete: i.autoComplete,
        inputMode: i.inputMode,
    };
}
function extractInput(form, input, ...throws) {
    const entry = form.get(input.name);
    if (!entry || typeof entry !== "string")
        return input.nullable ? null : input.defaultValue;
    if (entry === "")
        return input.nullable ? null : input.defaultValue;
    const t = throws.length === 1 ? throws[0] : false;
    const valid = new RegExp(input.regexp).test(entry);
    if (!valid && t)
        throw new Error(`${errInvalidFormValueRegexp}: name=${input.name}, value=${entry}, regexp=${input.regexp}`);
    switch (typeof input.defaultValue) {
        case "string":
            return entry;
        case "number":
            if (Number.isNaN(entry)) {
                if (t)
                    throw new Error(`${errInvalidFormValueType}: name=${input.name}, value=${entry}, type=number`);
                return input.defaultValue;
            }
            return Number(entry);
        default:
            throw new Error(`${errNotFoundInputHelper}: name=${input.name}, value=${entry}, input_default_value_type=${typeof input.defaultValue}`);
    }
}
function extractForm(form, helper, ...throws) {
    const res = {};
    for (const name in helper) {
        res[name] = extractInput(form, helper[name], ...throws);
    }
    return res;
}
function newInitValue(helper) {
    const res = {};
    for (const name in helper) {
        if (!helper[name].defaultValue && helper[name].nullable) {
            res[name] = null;
            continue;
        }
        res[name] = helper[name].defaultValue;
    }
    return res;
}
export default {
    extractForm,
    extractInputAttributes,
    newForm,
    newInitValue,
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnVuYy9pbnB1dC9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sSUFBSSxDQUFDO0FBRTdCLE9BQU8sRUFDTix5QkFBeUIsRUFDekIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixHQVF0QixNQUFNLFNBQVMsQ0FBQztBQUVqQixTQUFTLFFBQVEsQ0FBQyxHQUFHLElBQW9DO0lBQ3hELE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNmLE9BQU8sU0FBUyxDQUNmO1lBQ0MsSUFBSTtZQUNKLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsY0FBYyxFQUFFLGlCQUFpQjtZQUNqQyxJQUFJLEVBQUUsTUFBTTtZQUNaLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1NBQ2YsRUFDRCxHQUFHLElBQUksQ0FDUCxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEdBQUcsSUFBb0M7SUFDeEQsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2YsT0FBTyxTQUFTLENBQ2Y7WUFDQyxJQUFJO1lBQ0osWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLGtFQUFrRTtZQUMxRSxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLElBQUksRUFBRSxVQUFVO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1NBQ2YsRUFDRCxHQUFHLElBQUksQ0FDUCxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBb0M7SUFDbkQsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2YsT0FBTyxTQUFTLENBQ2Y7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