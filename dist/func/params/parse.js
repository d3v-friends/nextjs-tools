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
export default function (params, initParams) {
    return __awaiter(this, void 0, void 0, function* () {
        const p = yield params;
        const res = {};
        for (const key in initParams) {
            if (!p.hasOwnProperty(key)) {
                res[key] = initParams[key];
                continue;
            }
            if (p[key] instanceof Array) {
                res[key] = p[key] || initParams[key];
                continue;
            }
            switch (typeof initParams[key]) {
                case "number":
                    res[key] = Number.isNaN(p[key]) ? 0 : Number(p[key]);
                    break;
                case "string":
                    res[key] = p[key];
                    break;
                case "undefined":
                    res[key] = null;
                    break;
                default:
                    res[key] = initParams[key];
                    break;
            }
        }
        return res;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuYy9wYXJhbXMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBSWIsTUFBTSxDQUFDLE9BQU8sV0FDYixNQUFxQyxFQUNyQyxVQUFhOztRQUViLE1BQU0sQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDO1FBQ3ZCLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixLQUFLLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLFNBQVM7WUFDVixDQUFDO1lBRUQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUM7Z0JBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxTQUFTO1lBQ1YsQ0FBQztZQUVELFFBQVEsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDaEMsS0FBSyxRQUFRO29CQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDckQsTUFBTTtnQkFDUCxLQUFLLFFBQVE7b0JBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEIsTUFBTTtnQkFDUCxLQUFLLFdBQVc7b0JBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDaEIsTUFBTTtnQkFDUDtvQkFDQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixNQUFNO1lBQ1IsQ0FBQztRQUNGLENBQUM7UUFFRCxPQUFPLEdBQVEsQ0FBQztJQUNqQixDQUFDO0NBQUEifQ==