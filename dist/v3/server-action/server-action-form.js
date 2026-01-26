import { DateTime } from "luxon";
import regexp from "../regexp/index.js";
function isInvalid(str, value, message) {
    if (new RegExp(str).test(value)) {
        return;
    }
    throw new Error(`${message}: value=${value}`);
}
function isNull(str, message) {
    if (!str) {
        throw new Error(`${message}`);
    }
    return str;
}
function field(parser, i = {}) {
    return {
        ...i,
        parser,
    };
}
function create(form) {
    for (const name in form) {
        form[name].name = name;
    }
    return form;
}
function boolean(i = {}) {
    return {
        regexp: regexp.boolean,
        parser: (str) => {
            str = isNull(str, "no_boolean");
            return str === "true";
        },
        ...i,
    };
}
function nullableBoolean(i = {}) {
    return {
        regexp: regexp.boolean,
        parser: (str) => {
            if (str === null)
                return null;
            return str === "true";
        },
        ...i,
    };
}
function username(i = {}) {
    return {
        regexp: regexp.username,
        invalidMessage: "영문 소문자로 시작하고 4자리 이상 20자리 이하로 입력하여 주십시오.",
        parser: (str) => {
            str = isNull(str, "no_username");
            isInvalid(regexp.username, str, "invalid_username");
            return str;
        },
        ...i,
    };
}
function nullableUsername(i = {}) {
    return {
        regexp: regexp.username,
        invalidMessage: "영문 소문자로 시작하고 4자리 이상 20자리 이하로 입력하여 주십시오.",
        parser: (str) => {
            if (str === null)
                return null;
            isInvalid(regexp.username, str, "invalid_username");
            return str;
        },
        ...i,
    };
}
function password(i = {}) {
    return {
        regexp: regexp.password,
        invalidMessage: "영문, 숫자, 특수문자를 사용하여 8자리 이상 20자리 미만 비밀번호를 입력하여 주십시오.",
        parser: (str) => {
            str = isNull(str, "no_password");
            isInvalid(regexp.password, str, "invalid_password");
            return str;
        },
        ...i,
    };
}
function nullablePassword(i = {}) {
    return {
        regexp: regexp.password,
        invalidMessage: "영문, 숫자, 특수문자를 사용하여 8자리 이상 20자리 미만 비밀번호를 입력하여 주십시오.",
        parser: (str) => {
            if (str === null)
                return null;
            isInvalid(regexp.password, str, "invalid_password");
            return str;
        },
        ...i,
    };
}
function otp(i = {}) {
    return {
        regexp: regexp.otp,
        parser: (str) => {
            str = isNull(str, "no_otp");
            isInvalid(regexp.otp, str, "invalid_otp");
            return str;
        },
        ...i,
    };
}
function nullableOtp(i = {}) {
    return {
        regexp: regexp.otp,
        parser: (str) => {
            if (str === null)
                return null;
            isInvalid(regexp.otp, str, "invalid_otp");
            return str;
        },
        ...i,
    };
}
function rfc3339time(i = {}) {
    return {
        regexp: regexp.rfc3339Time,
        invalidMessage: "2000-01-01T00:00:00Z 형식으로 입력하여 주십시오.",
        parser: (str) => {
            str = isNull(str, "no_rfc3339time");
            const date = DateTime.fromISO(str);
            return date.toJSDate();
        },
        ...i,
    };
}
function nullableRfc3339time(i = {}) {
    return {
        regexp: regexp.rfc3339Time,
        invalidMessage: "2000-01-01T00:00:00Z 형식으로 입력하여 주십시오.",
        parser: (str) => {
            if (str === null)
                return null;
            const date = DateTime.fromISO(str);
            return date.toJSDate();
        },
        ...i,
    };
}
function objectId(i = {}) {
    return {
        regexp: regexp.objectId,
        invalidMessage: "영문소문자, 숫자를 포함한 24자리 문자열을 입력하여 주십시오.",
        parser: (str) => {
            str = isNull(str, "no_object_id");
            isInvalid(regexp.objectId, str, "invalid_object_id");
            return str;
        },
        ...i,
    };
}
function nullableObjectId(i = {}) {
    return {
        regexp: regexp.objectId,
        invalidMessage: "영문소문자, 숫자를 포함한 24자리 문자열을 입력하여 주십시오.",
        parser: (str) => {
            if (str === null)
                return null;
            isInvalid(regexp.objectId, str, "invalid_object_id");
            return str;
        },
        ...i,
    };
}
function decimal(i = {}) {
    return {
        regexp: regexp.decimal,
        invalidMessage: "숫자만 입력하여 주십시오.",
        parser: (str) => {
            str = isNull(str, "no_decimal");
            isInvalid(regexp.decimal, str, "invalid_decimal");
            return str;
        },
        ...i,
    };
}
function nullableDecimal(i = {}) {
    return {
        regexp: regexp.decimal,
        invalidMessage: "숫자만 입력하여 주십시오.",
        parser: (str) => {
            if (str === null)
                return null;
            isInvalid(regexp.decimal, str, "invalid_decimal");
            return str;
        },
        ...i,
    };
}
function integer(i = {}) {
    return {
        regexp: regexp.integer,
        invalidMessage: "숫자만 입력하여 주십시오.",
        parser: (str) => {
            str = isNull(str, "no_integer");
            isInvalid(regexp.integer, str, "invalid_integer");
            return parseInt(str);
        },
        ...i,
    };
}
function nullableInteger(i = {}) {
    return {
        regexp: regexp.integer,
        invalidMessage: "숫자만 입력하여 주십시오.",
        parser: (str) => {
            if (str === null)
                return null;
            isInvalid(regexp.integer, str, "invalid_integer");
            return parseInt(str);
        },
        ...i,
    };
}
function naturalNumber(i = {}) {
    return {
        regexp: regexp.naturalNumber,
        invalidMessage: "숫자만 입력하여 주십시오.",
        parser: (str) => {
            str = isNull(str, "no_natural_number");
            isInvalid(regexp.naturalNumber, str, "invalid_natural_number");
            return parseInt(str);
        },
        ...i,
    };
}
function nullableNaturalNumber(i = {}) {
    return {
        regexp: regexp.naturalNumber,
        invalidMessage: "숫자만 입력하여 주십시오.",
        parser: (str) => {
            if (str === null)
                return null;
            isInvalid(regexp.naturalNumber, str, "invalid_natural_number");
            return parseInt(str);
        },
        ...i,
    };
}
function negativeNumber(i = {}) {
    return {
        regexp: regexp.negativeNumber,
        invalidMessage: "숫자만 입력하여 주십시오.",
        parser: (str) => {
            str = isNull(str, "no_negative_number");
            isInvalid(regexp.negativeNumber, str, "invalid_negative_number");
            return parseInt(str);
        },
        ...i,
    };
}
function nullableNegativeNumber(i = {}) {
    return {
        regexp: regexp.negativeNumber,
        invalidMessage: "숫자만 입력하여 주십시오.",
        parser: (str) => {
            if (str === null)
                return null;
            isInvalid(regexp.negativeNumber, str, "invalid_negative_number");
            return parseInt(str);
        },
        ...i,
    };
}
function datePeriod(i = {}) {
    return {
        parser: (str) => {
            const res = {};
            if (str === null)
                return res;
            const ls = str.split(",");
            switch (ls.length) {
                case 1:
                    isInvalid(regexp.rfc3339Time, ls[0], "invalid_date_period_from");
                    res.from = DateTime.fromISO(ls[0]).toUTC().toJSDate();
                    break;
                case 2:
                    isInvalid(regexp.rfc3339Time, ls[0], "invalid_date_period_from");
                    isInvalid(regexp.rfc3339Time, ls[1], "invalid_date_period_to");
                    res.from = DateTime.fromISO(ls[0]).toUTC().toJSDate();
                    res.to = DateTime.fromISO(ls[1]).toUTC().toJSDate();
                    break;
            }
            return res;
        },
        ...i,
    };
}
export default {
    create,
    boolean,
    nullableBoolean,
    username,
    nullableUsername,
    password,
    nullablePassword,
    otp,
    nullableOtp,
    rfc3339time,
    nullableRfc3339time,
    objectId,
    nullableObjectId,
    integer,
    nullableInteger,
    decimal,
    nullableDecimal,
    naturalNumber,
    nullableNaturalNumber,
    negativeNumber,
    nullableNegativeNumber,
    field,
    datePeriod,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWFjdGlvbi1mb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3YzL3NlcnZlci1hY3Rpb24vc2VydmVyLWFjdGlvbi1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxNQUFNLE1BQU0sV0FBVyxDQUFDO0FBRy9CLFNBQVMsU0FBUyxDQUFDLEdBQW9CLEVBQUUsS0FBYSxFQUFFLE9BQWU7SUFDdEUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNqQyxPQUFPO0lBQ1IsQ0FBQztJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxPQUFPLFdBQVcsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsR0FBcUIsRUFBRSxPQUFlO0lBQ3JELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFJRCxTQUFTLEtBQUssQ0FBSSxNQUFzQixFQUFFLElBQW1CLEVBQUU7SUFDOUQsT0FBTztRQUNOLEdBQUcsQ0FBQztRQUNKLE1BQU07S0FDTixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFtQixJQUFpQjtJQUNsRCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNiLENBQUM7QUFJRCxTQUFTLE9BQU8sQ0FBQyxJQUFtQixFQUFFO0lBQ3JDLE9BQU87UUFDTixNQUFNLEVB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