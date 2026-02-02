"use server";
export default async function unwrapForm(form, args) {
    for (const key in form) {
        if (!form[key].validate(args[key])) {
            throw new Error(`invalid_value: key=${key}, value=${args[key]}`);
        }
    }
    return args;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW53cmFwLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjMvc2VydmVyLWFjdGlvbi91bndyYXAtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFHYixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssVUFBVSxVQUFVLENBQW1CLElBQWlCLEVBQUUsSUFBTztJQUNwRixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsQ0FBQyxFQUFFLENBQUM7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxXQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNGLENBQUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNiLENBQUMifQ==