"use client";
import { useActionState } from "react";
import { fnServerAction } from "..";
export default function (handler, form) {
    return useActionState(handler, {
        time: 0,
        string: fnServerAction.forms.defaultString(form),
        value: fnServerAction.forms.defaultValue(form),
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXNlcnZlci1hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjEvc2VydmVyLWFjdGlvbi91c2Utc2VydmVyLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ3JDLE9BQU8sRUFBMEIsY0FBYyxFQUFDLE1BQU0sSUFBSSxDQUFDO0FBSTNELE1BQU0sQ0FBQyxPQUFPLFdBQ2IsT0FBMEUsRUFDMUUsSUFBdUI7SUFFdkIsT0FBTyxjQUFjLENBQXlDLE9BQU8sRUFBRTtRQUN0RSxJQUFJLEVBQUUsQ0FBQztRQUNQLE1BQU0sRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDaEQsS0FBSyxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztLQUM5QyxDQUFDLENBQUM7QUFDSixDQUFDIn0=