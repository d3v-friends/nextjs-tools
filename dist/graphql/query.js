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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import exec from "./exec";
export default function (query_1, header_1) {
    return __awaiter(this, arguments, void 0, function (query, header) {
        var _i, e_1;
        var _a;
        var _b = [];
        for (_i = 2; _i < arguments.length; _i++) {
            _b[_i - 2] = arguments[_i];
        }
        var variables = _b[0];
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    _a = {};
                    return [4, exec({
                            query: query,
                            header: header,
                            variables: variables,
                        })];
                case 1: return [2, (_a.result = _c.sent(),
                        _a)];
                case 2:
                    e_1 = _c.sent();
                    return [2, {
                            result: null,
                            error: e_1 instanceof Error ? e_1 : new Error(JSON.stringify(e_1)),
                        }];
                case 3: return [2];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnVuYy9ncmFwaHFsL3F1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUUxQixNQUFNLENBQUMsT0FBTzt3REFDYixLQUErQyxFQUMvQyxNQUErQjs7O1FBQy9CLFlBQTRFO3FCQUE1RSxxQkFBNEUsRUFBNUUsSUFBNEU7WUFBNUUsMkJBQTRFOztRQUE1RSxJQUFJLFNBQVMsUUFBQSxDQUErRDs7Ozs7O29CQUlsRSxXQUFNLElBQUksQ0FBQzs0QkFDbEIsS0FBSyxPQUFBOzRCQUNMLE1BQU0sUUFBQTs0QkFDTixTQUFTLFdBQUE7eUJBQ1QsQ0FBQyxFQUFBO3dCQUxILFlBQ0MsU0FBTSxHQUFFLFNBSU47NkJBQ0Q7OztvQkFFRixXQUFPOzRCQUNOLE1BQU0sRUFBRSxJQUFlOzRCQUN2QixLQUFLLEVBQUUsR0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUMsQ0FBQyxDQUFDO3lCQUM1RCxFQUFDOzs7OztDQUVIIn0=