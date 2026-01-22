import regexp from "../regexp/index.js";
export default {
    objectId: (def) => {
        return (str) => {
            if (new RegExp(regexp.objectId).test(str))
                return str;
            return def ?? "";
        };
    },
    naturalNumber: (def) => {
        return (str) => {
            if (new RegExp(regexp.naturalNumber).test(str))
                return Number(str);
            return def ?? 0;
        };
    },
    decimal: (def) => {
        return (str) => {
            if (new RegExp(regexp.decimal).test(str))
                return str;
            return def ?? "0.0";
        };
    },
    string: (def) => {
        return (str) => {
            if (!str)
                return def ?? "";
            return str;
        };
    },
    pattern: (regexp, def) => {
        return (str) => {
            if (new RegExp(regexp).test(str))
                return str;
            return def ?? "";
        };
    },
    rfc3339: (def) => {
        const iso3339Regexp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(\.\d+)?(Z|[+-]([01]\d|2[0-3]):([0-5]\d))$/;
        const regexp = new RegExp(iso3339Regexp);
        return (str) => {
            if (regexp.test(str))
                return str;
            return def ?? "";
        };
    },
    pagination: (def) => {
        return (str) => {
            if (str === "")
                return def ?? 0;
            if (new RegExp(/^(0|[1-9]\d*)$/).test(str))
                return parseInt(str);
            return def ?? 0;
        };
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3YzL3NlYXJjaC1wYXJhbXMvcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFdBQVcsQ0FBQztBQUkvQixlQUFlO0lBQ2QsUUFBUSxFQUFFLENBQUMsR0FBWSxFQUFrQixFQUFFO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNkLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxHQUFHLENBQUM7WUFDdEQsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztJQUNILENBQUM7SUFDRCxhQUFhLEVBQUUsQ0FBQyxHQUFZLEVBQWtCLEVBQUU7UUFDL0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2QsSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNELE9BQU8sRUFBRSxDQUFDLEdBQVksRUFBa0IsRUFBRTtRQUN6QyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDZCxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sR0FBRyxDQUFDO1lBQ3JELE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQztRQUNyQixDQUFDLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFFLENBQUMsR0FBWSxFQUFrQixFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNkLElBQUksQ0FBQyxHQUFHO2dCQUFFLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQztRQUNaLENBQUMsQ0FBQztJQUNILENBQUM7SUFDRCxPQUFPLEVBQUUsQ0FBQyxNQUFjLEVBQUUsR0FBWSxFQUFrQixFQUFFO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNkLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLEdBQUcsQ0FBQztZQUM3QyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNELE9BQU8sRUFBRSxDQUFDLEdBQVksRUFBa0IsRUFBRTtRQUN6QyxNQUFNLGFBQWEsR0FDbEIsNEhBQTRILENBQUM7UUFDOUgsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLEdBQUcsQ0FBQztZQUNqQyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNELFVBQVUsRUFBRSxDQUFDLEdBQVksRUFBa0IsRUFBRTtRQUM1QyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDZCxJQUFJLEdBQUcsS0FBSyxFQUFFO2dCQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztDQUNELENBQUMifQ==