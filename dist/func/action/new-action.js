var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fnInput from "../input";
export default function (form, formHelper, handler) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = {
            input: fnInput.fn.formFieldAll(form, formHelper),
        };
        try {
            res.response = yield handler(fnInput.fn.formFieldAll(form, formHelper, true));
            return res;
        }
        catch (e) {
            if (e instanceof Error)
                res.error = e;
            else
                res.error = new Error(JSON.stringify(e));
            return res;
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mdW5jL2FjdGlvbi9uZXctYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE9BQU8sT0FBTyxNQUFNLGFBQWEsQ0FBQztBQUdsQyxNQUFNLENBQUMsT0FBTyxXQUNiLElBQWMsRUFDZCxVQUE2QixFQUM3QixPQUE2Qzs7UUFFN0MsTUFBTSxHQUFHLEdBQTJCO1lBQ25DLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO1NBQ2hELENBQUM7UUFDRixJQUFJLENBQUM7WUFDSixHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5RSxPQUFPLEdBQUcsQ0FBQztRQUNaLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLFlBQVksS0FBSztnQkFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2pDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sR0FBRyxDQUFDO1FBQ1osQ0FBQztJQUNGLENBQUM7Q0FBQSJ9