"use server";
import getLogger from "../logger/get-logger.js";
import formParser from "./form-parser.js";
export default async function (form, desc, handler) {
    const logger = await getLogger();
    try {
        const i = getValue(form, desc);
        const res = await handler(i);
        logger.info({
            action: "SERVER_ACTION",
            input: i,
            response: res,
        });
        return {
            time: new Date().getTime(),
            response: res,
            input: i,
        };
    }
    catch (e) {
        let message = e instanceof Error ? e.message : JSON.stringify(e);
        logger.error({
            action: "SERVER_ACTION",
            error: message,
        });
        return {
            time: new Date().getTime(),
            response: null,
            input: null,
            error: message,
        };
    }
}
function getValue(form, desc) {
    const res = {};
    for (const key in desc) {
        const field = desc[key];
        const value = formParser.string(form, key);
        res[key] = field.parser(value);
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3YzL3NlcnZlci1hY3Rpb24vc2VydmVyLWZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sU0FBUyxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV2QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FDbkIsSUFBYyxFQUNkLElBQWlCLEVBQ2pCLE9BQWtDO0lBRWxDLE1BQU0sTUFBTSxHQUFHLE1BQU0sU0FBUyxFQUFFLENBQUM7SUFFakMsSUFBSSxDQUFDO1FBQ0osTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1gsTUFBTSxFQUFFLGVBQWU7WUFDdkIsS0FBSyxFQUFFLENBQUM7WUFDUixRQUFRLEVBQUUsR0FBRztTQUNiLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsQ0FBQztTQUNSLENBQUM7SUFDSCxDQUFDO0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNaLElBQUksT0FBTyxHQUFHLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakUsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNaLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLEtBQUssRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNOLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUMxQixRQUFRLEVBQUUsSUFBUztZQUNuQixLQUFLLEVBQUUsSUFBb0I7WUFDM0IsS0FBSyxFQUFFLE9BQU87U0FDZCxDQUFDO0lBQ0gsQ0FBQztBQUNGLENBQUM7QUFHRCxTQUFTLFFBQVEsQ0FBbUIsSUFBYyxFQUFFLElBQWlCO0lBQ3BFLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztJQUVwQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsT0FBTyxHQUFRLENBQUM7QUFDakIsQ0FBQyJ9