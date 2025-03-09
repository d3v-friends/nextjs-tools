var errNoEnvValue = "no_env_value";
var errInvalidNumberEnvValue = "invalid_number_env_value";
export function string(prefix, key) {
    var defaults = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        defaults[_i - 2] = arguments[_i];
    }
    var v = getValue(prefix, key);
    if (v)
        return v;
    if (defaults.length === 0)
        throw new Error("".concat(errNoEnvValue, ": key=").concat(key));
    return defaults[0];
}
export function number(prefix, key) {
    var defaults = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        defaults[_i - 2] = arguments[_i];
    }
    var v = getValue(prefix, key);
    if (!v) {
        if (defaults.length === 1)
            return defaults[0];
        throw new Error("".concat(errNoEnvValue, ": key=").concat(key));
    }
    if (Number.isNaN(v))
        throw new Error("".concat(errInvalidNumberEnvValue, ": key=").concat(key, ", value=").concat(v));
    return Number(v);
}
export function boolean(prefix, key) {
    var defaults = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        defaults[_i - 2] = arguments[_i];
    }
    var v = getValue(prefix, key);
    if (!v) {
        if (defaults.length === 1)
            return defaults[0];
        else
            throw new Error("".concat(errNoEnvValue, ": key=").concat(key));
    }
    return v === "true";
}
function getValue(prefix, key) {
    if (prefix)
        return key = "".concat(prefix, "_").concat(key);
    return process.env[key] || "";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmMvZW52L2Vudi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLGFBQWEsR0FBRyxjQUFjLENBQUM7QUFDckMsSUFBTSx3QkFBd0IsR0FBRywwQkFBMEIsQ0FBQztBQUU1RCxNQUFNLFVBQVUsTUFBTSxDQUFDLE1BQWMsRUFBRSxHQUFXO0lBQUUsa0JBQXFCO1NBQXJCLFVBQXFCLEVBQXJCLHFCQUFxQixFQUFyQixJQUFxQjtRQUFyQixpQ0FBcUI7O0lBQ3hFLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEIsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLFVBQUcsYUFBYSxtQkFBUyxHQUFHLENBQUUsQ0FBQyxDQUFDO0lBQzNFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUM7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLE1BQWMsRUFBRSxHQUFXO0lBQUUsa0JBQXFCO1NBQXJCLFVBQXFCLEVBQXJCLHFCQUFxQixFQUFyQixJQUFxQjtRQUFyQixpQ0FBcUI7O0lBQ3hFLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1IsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQUcsYUFBYSxtQkFBUyxHQUFHLENBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFHLHdCQUF3QixtQkFBUyxHQUFHLHFCQUFXLENBQUMsQ0FBRSxDQUFDLENBQUM7SUFDNUYsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsTUFBYyxFQUFFLEdBQVc7SUFBRSxrQkFBc0I7U0FBdEIsVUFBc0IsRUFBdEIscUJBQXNCLEVBQXRCLElBQXNCO1FBQXRCLGlDQUFzQjs7SUFDMUUsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQUcsYUFBYSxtQkFBUyxHQUFHLENBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUM7QUFDckIsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLE1BQWMsRUFBRSxHQUFXO0lBQzVDLElBQUksTUFBTTtRQUFFLE9BQU8sR0FBRyxHQUFHLFVBQUcsTUFBTSxjQUFJLEdBQUcsQ0FBRSxDQUFDO0lBQzVDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0IsQ0FBQyJ9