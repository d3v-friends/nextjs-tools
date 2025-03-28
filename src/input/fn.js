import { errInvalidFormValueRegexp, errInvalidFormValueType, } from "./types";
function inputAttributes(i) {
    return {
        name: i.name,
        defaultValue: String(i.defaultValue),
        type: i.type,
        autoComplete: i.autoComplete,
        inputMode: i.inputMode,
    };
}
function parseArray({ origin, name, regexp, throws, }) {
    const split = origin.split(",");
    if (split.length === 0)
        return split;
    const r = new RegExp(regexp);
    const res = [];
    for (const elem of split) {
        if (!r.test(elem)) {
            if (throws) {
                throw new Error(`${errInvalidFormValueRegexp}: name=${name}, value=${elem}, regexp=${regexp}`);
            }
            continue;
        }
        res.push(elem);
    }
    return res;
}
function parseNumber({ origin, name, throws, }) {
    const res = [];
    for (const elem of origin) {
        if (Number.isNaN(elem)) {
            if (throws) {
                throw new Error(`${errInvalidFormValueType}: name=${name}, value=${elem}, type=number`);
            }
            continue;
        }
        res.push(Number(elem));
    }
    return res;
}
function parseBoolean({ origin, }) {
    const res = [];
    for (const elem of origin) {
        res.push(elem === "true");
    }
    return res;
}
function formField(form, input, ...throws) {
    const entry = form.get(input.name);
    if (!entry && input.nullable)
        return null;
    const t = throws.length === 1 ? throws[0] : false;
    if (typeof entry !== "string") {
        if (input.nullable)
            return null;
    }
    const origin = entry;
    switch (input.valueFormat) {
        case "text":
            const valid = new RegExp(input.regexp).test(origin);
            if (!valid && t) {
                throw new Error(`${errInvalidFormValueRegexp}: name=${input.name}, value=${entry}, regexp=${input.regexp}`);
            }
            switch (input.valueType) {
                case "string":
                    return origin;
                case "number":
                    if (Number.isNaN(origin)) {
                        if (t) {
                            throw new Error(`${errInvalidFormValueType}: name=${input.name}, value=${entry}, type=number`);
                        }
                        return input.defaultValue;
                    }
                    return Number(origin);
                case "boolean":
                    return (origin === "true");
                default:
                    throw new Error(`invalid_input_value_type: name=${input.name}, value_type=${input.valueType}`);
            }
        case "csv":
            const ls = parseArray({
                origin,
                regexp: input.regexp,
                name: input.name,
                throws: t,
            });
            switch (input.valueType) {
                case "string":
                    return ls;
                case "number":
                    return parseNumber({ origin: ls, name: input.name, throws: t });
                case "boolean":
                    return parseBoolean({ origin: ls });
                default:
                    throw new Error(`invalid_input_value_type: name=${input.name}, value_type=${input.valueType}`);
            }
        default:
            throw new Error(`invalid_input_value_format: name=${input.name}, value_format=${input.valueFormat}`);
    }
}
function formFieldAll(form, helper, ...throws) {
    const res = {};
    for (const name in helper) {
        res[name] = formField(form, helper[name], ...throws);
    }
    return res;
}
function formValue(form, helper) {
    const res = {};
    for (const name in helper) {
        const entry = form.get(name);
        if (!entry) {
            res[name] = "";
            continue;
        }
        if (typeof entry !== "string") {
            res[name] = "";
            continue;
        }
        res[name] = entry;
    }
    return res;
}
function initValue(helper) {
    const res = {};
    for (const name in helper) {
        res[name] = helper[name].defaultValue;
    }
    return res;
}
function initInput(helper) {
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
    formField,
    formFieldAll,
    inputAttributes,
    initValue,
    initInput,
    formValue,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ04seUJBQXlCLEVBQ3pCLHVCQUF1QixHQUl2QixNQUFNLFNBQVMsQ0FBQztBQUVqQixTQUFTLGVBQWUsQ0FBUSxDQUFxQjtJQUNwRCxPQUFPO1FBQ04sSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBQ1osWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3BDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtRQUNaLFlBQVksRUFBRSxDQUFDLENBQUMsWUFBWTtRQUM1QixTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVM7S0FDdEIsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxFQUNuQixNQUFNLEVBQ04sSUFBSSxFQUNKLE1BQU0sRUFDTixNQUFNLEdBTUw7SUFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFckMsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFN0IsTUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBQ3pCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNuQixJQUFJLE1BQU0sRUFBRSxDQUFDO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyx5QkFBeUIsVUFBVSxJQUFJLFdBQVcsSUFBSSxZQUFZLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDaEcsQ0FBQztZQUNELFNBQVM7UUFDVixDQUFDO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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