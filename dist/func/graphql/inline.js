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
import exec from "src/func/graphql/exec";
export default function (query_1, header_1) {
    return __awaiter(this, arguments, void 0, function* (query, header, ...[variables]) {
        return exec({
            query,
            header,
            variables,
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Z1bmMvZ3JhcGhxbC9pbmxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBQ2IsT0FBTyxJQUFJLE1BQU0sdUJBQXVCLENBQUM7QUFHekMsTUFBTSxDQUFDLE9BQU87eURBQ2IsS0FBb0MsRUFDcEMsTUFBK0IsRUFDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBK0Q7UUFFNUUsT0FBTyxJQUFJLENBQUM7WUFDWCxLQUFLO1lBQ0wsTUFBTTtZQUNOLFNBQVM7U0FDVCxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUEifQ==