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
import exec from "../graphql/exec";
export default function (query_1, header_1) {
    return __awaiter(this, arguments, void 0, function* (query, header, ...[variables]) {
        try {
            return {
                result: yield exec({
                    query,
                    header,
                    variables,
                }),
            };
        }
        catch (e) {
            return {
                result: null,
                error: e instanceof Error ? e : new Error(JSON.stringify(e)),
            };
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuYy9ncmFwaHFsL3F1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUNiLE9BQU8sSUFBSSxNQUFNLG9CQUFvQixDQUFDO0FBR3RDLE1BQU0sQ0FBQyxPQUFPO3lEQUNiLEtBQW9DLEVBQ3BDLE1BQStCLEVBQy9CLEdBQUcsQ0FBQyxTQUFTLENBQStEO1FBRTVFLElBQUksQ0FBQztZQUNKLE9BQU87Z0JBQ04sTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDO29CQUNsQixLQUFLO29CQUNMLE1BQU07b0JBQ04sU0FBUztpQkFDVCxDQUFDO2FBQ0YsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1osT0FBTztnQkFDTixNQUFNLEVBQUUsSUFBZTtnQkFDdkIsS0FBSyxFQUFFLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1RCxDQUFDO1FBQ0gsQ0FBQztJQUNGLENBQUM7Q0FBQSJ9