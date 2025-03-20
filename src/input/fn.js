import { errInvalidFormValueRegexp, errInvalidFormValueType, errNotFoundInputHelper, } from "./types";
function inputAttributes(i) {
    return {
        name: i.name,
        defaultValue: String(i.defaultValue),
        type: i.type,
        autoComplete: i.autoComplete,
        inputMode: i.inputMode,
    };
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
function formFieldAll(form, helper, ...throws) {
    const res = {};
    for (const name in helper) {
        res[name] = formField(form, helper[name], ...throws);
    }
    return res;
}
function initValue(helper) {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ04seUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2QixzQkFBc0IsR0FJdEIsTUFBTSxTQUFTLENBQUM7QUFFakIsU0FBUyxlQUFlLENBQVEsQ0FBcUI7SUFDcEQsT0FBTztRQUNOLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtRQUNaLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNwQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7UUFDWixZQUFZLEVBQUUsQ0FBQyxDQUFDLFlBQVk7UUFDNUIsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTO0tBQ3RCLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUksSUFBYyxFQUFFLEtBQXFCLEVBQUUsR0FBRyxNQUFpQjtJQUNoRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFMUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2xELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxLQUFLLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxDQUFDO0lBRTdELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyx5QkFBeUIsVUFBVSxLQUFLLENBQUMsSUFBSSxXQUFXLEtBQUssWUFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUU3RyxRQUFRLE9BQU8sS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25DLEtBQUssUUFBUTtZQUNaLE9BQU8sS0FBVSxDQUFDO1FBQ25CLEtBQUssUUFBUTtZQUNaLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUM7b0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLHVCQUF1QixVQUFVLEtBQUssQ0FBQyxJQUFJLFdBQVcsS0FBSyxlQUFlLENBQUMsQ0FBQztnQkFDdEcsT0FBTyxLQUFLLENBQUMsWUFBaUIsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFNLENBQUM7UUFDM0I7WUFDQyxNQUFNLElBQUksS0FBSyxDQUNkLEdBQUcsc0JBQXNCLFVBQVUsS0FBSyxDQUFDLElBQUksV0FBVyxLQUFLLDhCQUE4QixPQUFPLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FDdEgsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDO0FBRUQsU0FBUyxZQUFZLENBQVEsSUFBYyxFQUFFLE1BQXlCLEVBQUUsR0FBRyxNQUFpQjtJQUMzRixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7SUFDcEIsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsT0FBTyxHQUFZLENBQUM7QUFDckIsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFRLE1BQXlCO0lBQ2xELE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztJQUNwQixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN6RCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLFNBQVM7UUFDVixDQUFDO1FBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQztJQUNELE9BQU8sR0FBWSxDQUFDO0FBQ3JCLENBQUM7QUFFRCxlQUFlO0lBQ2QsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztDQUNULENBQUMifQ==