import { fnReflect, fnRegexp } from "../../index.js";
const parser = {
    number: (def) => {
        return (str) => {
            return fnReflect.number(str, def);
        };
    },
    objectId: (def) => {
        return (str) => {
            if (new RegExp(fnRegexp.objectId).test(str))
                return str;
            return def;
        };
    },
    string: (list, def) => {
        return (str) => {
            if (list.includes(str))
                return str;
            return def;
        };
    },
};
export default parser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3YxL3NlYXJjaC1wYXJhbXMvcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBSTFDLE1BQU0sTUFBTSxHQUFHO0lBQ2QsTUFBTSxFQUFFLENBQUMsR0FBVyxFQUFvQixFQUFFO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNkLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNELFFBQVEsRUFBRSxDQUFDLEdBQVcsRUFBb0IsRUFBRTtRQUMzQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDZCxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sR0FBRyxDQUFDO1lBQ3hELE9BQU8sR0FBRyxDQUFDO1FBQ1osQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sRUFBRSxDQUFDLElBQWMsRUFBRSxHQUFXLEVBQW9CLEVBQUU7UUFDekQsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLEdBQUcsQ0FBQztZQUNuQyxPQUFPLEdBQUcsQ0FBQztRQUNaLENBQUMsQ0FBQztJQUNILENBQUM7Q0FDRCxDQUFDO0FBRUYsZUFBZSxNQUFNLENBQUMifQ==