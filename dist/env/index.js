import { boolean as clBoolean, number as clNumber, string as clString } from "./client.js";
import { boolean as svBoolean, number as svNumber, string as svString } from "./server.js";
const fnEnv = {
    server: {
        string: svString,
        number: svNumber,
        boolean: svBoolean,
    },
    client: {
        string: clString,
        number: clNumber,
        boolean: clBoolean,
    },
};
export { fnEnv };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW52L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxPQUFPLElBQUksU0FBUyxFQUFFLE1BQU0sSUFBSSxRQUFRLEVBQUUsTUFBTSxJQUFJLFFBQVEsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN0RixPQUFPLEVBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRSxNQUFNLElBQUksUUFBUSxFQUFFLE1BQU0sSUFBSSxRQUFRLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFdEYsTUFBTSxLQUFLLEdBQUc7SUFDYixNQUFNLEVBQUU7UUFDUCxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUUsU0FBUztLQUNsQjtJQUNELE1BQU0sRUFBRTtRQUNQLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE9BQU8sRUFBRSxTQUFTO0tBQ2xCO0NBQ0QsQ0FBQztBQUVGLE9BQU8sRUFBQyxLQUFLLEVBQUMsQ0FBQyJ9