"use client";
import { useActionState } from "react";
import { fnServerAction } from "./index";
export default function (handler, form) {
    return useActionState(handler, {
        time: 0,
        string: fnServerAction.forms.defaultString(form),
        value: fnServerAction.forms.defaultValue(form),
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXNlcnZlci1hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyLWFjdGlvbi91c2Utc2VydmVyLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFHdkMsTUFBTSxDQUFDLE9BQU8sV0FDYixPQUFvRSxFQUNwRSxJQUFpQjtJQUVqQixPQUFPLGNBQWMsQ0FBbUMsT0FBTyxFQUFFO1FBQ2hFLElBQUksRUFBRSxDQUFDO1FBQ1AsTUFBTSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNoRCxLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0tBQzlDLENBQUMsQ0FBQztBQUNKLENBQUMifQ==