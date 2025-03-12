import { errInvalidFormValueRegexp, errInvalidFormValueType, errNotFoundInputHelper, } from "../input/types";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuYy9pbnB1dC9mbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04seUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2QixzQkFBc0IsR0FJdEIsTUFBTSxtQkFBbUIsQ0FBQztBQUczQixTQUFTLGVBQWUsQ0FBUSxDQUFxQjtJQUNwRCxPQUFPO1FBQ04sSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBQ1osWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3BDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtRQUNaLFlBQVksRUFBRSxDQUFDLENBQUMsWUFBWTtRQUM1QixTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVM7S0FDdEIsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBSSxJQUFjLEVBQUUsS0FBcUIsRUFBRSxHQUFHLE1BQWlCO0lBQ2hGLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUUxQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbEQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLEtBQUssQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBZSxDQUFDLENBQUM7SUFFN0QsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLHlCQUF5QixVQUFVLEtBQUssQ0FBQyxJQUFJLFdBQVcsS0FBSyxZQUFZLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRTdHLFFBQVEsT0FBTyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsS0FBSyxRQUFRO1lBQ1osT0FBTyxLQUFVLENBQUM7UUFDbkIsS0FBSyxRQUFRO1lBQ1osSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQztvQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsdUJBQXVCLFVBQVUsS0FBSyxDQUFDLElBQUksV0FBVyxLQUFLLGVBQWUsQ0FBQyxDQUFDO2dCQUN0RyxPQUFPLEtBQUssQ0FBQyxZQUFpQixDQUFDO1lBQ2hDLENBQUM7WUFDRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQU0sQ0FBQztRQUMzQjtZQUNDLE1BQU0sSUFBSSxLQUFLLENBQ2QsR0FBRyxzQkFBc0IsVUFBVSxLQUFLLENBQUMsSUFBSSxXQUFXLEtBQUssOEJBQThCLE9BQU8sS0FBSyxDQUFDLFlBQVksRUFBRSxDQUN0SCxDQUFDO0lBQ0osQ0FBQztBQUNGLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBUSxJQUFjLEVBQUUsTUFBeUIsRUFBRSxHQUFHLE1BQWlCO0lBQzNGLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztJQUNwQixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxPQUFPLEdBQVksQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQVEsTUFBeUI7SUFDbEQsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakIsU0FBUztRQUNWLENBQUM7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUN2QyxDQUFDO0lBQ0QsT0FBTyxHQUFZLENBQUM7QUFDckIsQ0FBQztBQUVELGVBQWU7SUFDZCxTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0NBQ1QsQ0FBQyJ9