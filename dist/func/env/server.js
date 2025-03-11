"use server";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { string as fnString, number as fnNumber, boolean as fnBoolean } from "../env/base";
export function string(key, ...defaults) {
    return __awaiter(this, void 0, void 0, function* () {
        return fnString("", key, ...defaults);
    });
}
export function number(key, ...defaults) {
    return __awaiter(this, void 0, void 0, function* () {
        return fnNumber("", key, ...defaults);
    });
}
export function boolean(key, ...defaults) {
    return __awaiter(this, void 0, void 0, function* () {
        return fnBoolean("", key, ...defaults);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Z1bmMvZW52L3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixPQUFPLEVBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRSxNQUFNLElBQUksUUFBUSxFQUFFLE9BQU8sSUFBSSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RixNQUFNLFVBQWdCLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxRQUFrQjs7UUFDOUQsT0FBTyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FBQTtBQUVELE1BQU0sVUFBZ0IsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLFFBQWtCOztRQUM5RCxPQUFPLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUFBO0FBRUQsTUFBTSxVQUFnQixPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsUUFBbUI7O1FBQ2hFLE9BQU8sU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQUEifQ==