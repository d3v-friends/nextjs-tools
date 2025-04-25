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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXNlcnZlci1hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyLWFjdGlvbi91c2Utc2VydmVyLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRXJDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFJdkMsTUFBTSxDQUFDLE9BQU8sV0FDYixPQUEwRSxFQUMxRSxJQUF1QjtJQUV2QixPQUFPLGNBQWMsQ0FBeUMsT0FBTyxFQUFFO1FBQ3RFLElBQUksRUFBRSxDQUFDO1FBQ1AsTUFBTSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNoRCxLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0tBQzlDLENBQUMsQ0FBQztBQUNKLENBQUMifQ==