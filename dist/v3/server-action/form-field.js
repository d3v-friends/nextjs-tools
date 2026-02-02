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
function field(parser, validate, i = {}) {
    return {
        ...i,
        validate,
        parser,
    };
}
function create(form) {
    for (const name in form) {
        form[name].name = name;
    }
    return form;
}
function string(i = {}) {
    return {
        parser: (str) => {
            str = isNull(str, "no_string");
            return str;
        },
        validate: (_) => true,
        ...i,
    };
}
function nullableString(i = {}) {
    return {
        parser: (str) => {
            if (str === null)
                return null;
            return str;
        },
        validate: (_) => true,
        ...i,
    };
}
function boolean(i = {}) {
    return {
        regexp: regexp.boolean,
        parser: (str) => {
            str = isNull(str, "no_boolean");
            return str === "true";
        },
        validate: (_) => true,
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
        validate: (_) => true,
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
        validate: (str) => new RegExp(regexp.username).test(str),
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
        validate: (i) => {
            if (!i)
                return true;
            return new RegExp(regexp.username).test(i);
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
        validate: (i) => new RegExp(regexp.password).test(i),
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
        validate: (i) => {
            if (!i)
                return true;
            return new RegExp(regexp.password).test(i);
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
        validate: (i) => new RegExp(regexp.otp).test(i || ""),
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
        validate: (i) => {
            if (!i)
                return true;
            return new RegExp(regexp.otp).test(i);
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
        validate: (_) => true,
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
        validate: (_) => true,
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
        validate: (i) => new RegExp(regexp.objectId).test(i),
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
        validate: (i) => {
            if (!i)
                return true;
            return new RegExp(regexp.objectId).test(i);
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
        validate: (i) => new RegExp(regexp.decimal).test(i),
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
        validate: (i) => {
            if (!i)
                return true;
            return new RegExp(regexp.decimal).test(i);
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
        validate: (i) => new RegExp(regexp.integer).test(i.toString()),
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
        validate: (i) => {
            if (!i)
                return true;
            return new RegExp(regexp.integer).test(i.toString());
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
        validate: (i) => {
            return new RegExp(regexp.naturalNumber).test(i.toString());
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
        validate: (i) => {
            if (!i)
                return true;
            return new RegExp(regexp.naturalNumber).test(i.toString());
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
        validate: (i) => {
            return new RegExp(regexp.negativeNumber).test(i.toString());
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
        validate: (i) => {
            if (!i)
                return true;
            return new RegExp(regexp.negativeNumber).test(i.toString());
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
        validate: (_) => true,
        ...i,
    };
}
export default {
    create,
    string,
    nullableString,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92My9zZXJ2ZXItYWN0aW9uL2Zvcm0tZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLE1BQU0sTUFBTSxXQUFXLENBQUM7QUFHL0IsU0FBUyxTQUFTLENBQUMsR0FBb0IsRUFBRSxLQUFhLEVBQUUsT0FBZTtJQUN0RSxJQUFJLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2pDLE9BQU87SUFDUixDQUFDO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLE9BQU8sV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxHQUFxQixFQUFFLE9BQWU7SUFDckQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQztBQUlELFNBQVMsS0FBSyxDQUFJLE1BQXNCLEVBQUUsUUFBMkIsRUFBRSxJQUFtQixFQUFFO0lBQzNGLE9BQU87UUFDTixHQUFHLENBQUM7UUFDSixRQUFRO1FBQ1IsTUFBTTtLQUNOLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQW1CLElBQWlCO0lBQ2xELEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQUlELFNBQVMsTUFBTSxDQUFDLElBQW1CLEVBQUU7SUFDcEMsT0FBTztRQUNOLE1B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