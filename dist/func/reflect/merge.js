export default function merge(origin, partial) {
    const res = Object.assign({}, origin);
    for (let key in origin) {
        switch (typeof origin[key]) {
            case "object":
                if (partial.hasOwnProperty(key))
                    res[key] = merge(res[key], partial[key]);
                break;
            default:
                if (partial.hasOwnProperty(key))
                    res[key] = partial[key];
        }
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuYy9yZWZsZWN0L21lcmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLFVBQVUsS0FBSyxDQUFhLE1BQVMsRUFBRSxPQUFtQjtJQUN2RSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLFFBQVEsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM1QixLQUFLLFFBQVE7Z0JBQ1osSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztvQkFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRyxPQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsTUFBTTtZQUNQO2dCQUNDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7b0JBQUcsR0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRSxDQUFDO0lBQ0YsQ0FBQztJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQyJ9