"use client";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { string as fnString, number as fnNumber, boolean as fnBoolean } from "./env";
export function string(key) {
    var defaults = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaults[_i - 1] = arguments[_i];
    }
    return fnString.apply(void 0, __spreadArray(["NEXT_PUBLIC", key], defaults, false));
}
export function number(key) {
    var defaults = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaults[_i - 1] = arguments[_i];
    }
    return fnNumber.apply(void 0, __spreadArray(["NEXT_PUBLIC", key], defaults, false));
}
export function boolean(key) {
    var defaults = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaults[_i - 1] = arguments[_i];
    }
    return fnBoolean.apply(void 0, __spreadArray(["NEXT_PUBLIC", key], defaults, false));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmMvZW52L2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFDYixPQUFPLEVBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRSxNQUFNLElBQUksUUFBUSxFQUFFLE9BQU8sSUFBSSxTQUFTLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFFbkYsTUFBTSxVQUFVLE1BQU0sQ0FBQyxHQUFXO0lBQUUsa0JBQXFCO1NBQXJCLFVBQXFCLEVBQXJCLHFCQUFxQixFQUFyQixJQUFxQjtRQUFyQixpQ0FBcUI7O0lBQ3hELE9BQU8sUUFBUSw4QkFBQyxhQUFhLEVBQUUsR0FBRyxHQUFLLFFBQVEsVUFBRTtBQUNsRCxDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxHQUFXO0lBQUUsa0JBQXFCO1NBQXJCLFVBQXFCLEVBQXJCLHFCQUFxQixFQUFyQixJQUFxQjtRQUFyQixpQ0FBcUI7O0lBQ3hELE9BQU8sUUFBUSw4QkFBQyxhQUFhLEVBQUUsR0FBRyxHQUFLLFFBQVEsVUFBRTtBQUNsRCxDQUFDO0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFXO0lBQUUsa0JBQXNCO1NBQXRCLFVBQXNCLEVBQXRCLHFCQUFzQixFQUF0QixJQUFzQjtRQUF0QixpQ0FBc0I7O0lBQzFELE9BQU8sU0FBUyw4QkFBQyxhQUFhLEVBQUUsR0FBRyxHQUFLLFFBQVEsVUFBRTtBQUNuRCxDQUFDIn0=