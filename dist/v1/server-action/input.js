import fnRegexp from "./regexp.js";
function string({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp, nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage, }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function boolean({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = fnRegexp.boolean, nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage, }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function strings({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp, nullable, inputFormat = "csv", inputType = "string", value = [], invalidMessage, }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function username({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = fnRegexp.username, nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "아이디를 확인하여 주십시오.", }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function password({ name, defaultValue = "", type = "password", autoComplete, inputMode = "text", hidden, regexp = fnRegexp.password, nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "비밀번호를 확인하여 주십시오.", }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function otp({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = fnRegexp.otp, nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "OTP 를 확인하여 주십시오.", }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function ip({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = fnRegexp.ipv4, nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "IP 를 확인하여 주십시오.", }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function lowerSnakeCase({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = fnRegexp.lowerSnakeCase, nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "내용을 확인하여 주십시오. (lower_snake_case)", }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function rfc3339Time({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = fnRegexp.rfc3339Time, nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "시간을 확인하여 주십시오.", }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function objectID({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = fnRegexp.objectId, nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "ObjectID 값을 확인하여 주십시오.", }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function port({ name, defaultValue = "0", type = "number", autoComplete, inputMode = "numeric", hidden, regexp = fnRegexp.port, nullable, inputFormat = "text", inputType = "number", value = 0, invalidMessage = "Port 번호를 확인하여 주십시오.", }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function number({ name, defaultValue = "0", type = "number", autoComplete, inputMode = "numeric", hidden, regexp = fnRegexp.number, nullable, inputFormat = "text", inputType = "number", value = 0, invalidMessage, }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function decimal({ name, defaultValue = "0", type = "number", autoComplete, inputMode = "numeric", hidden, regexp = fnRegexp.decimal, nullable, inputFormat = "text", inputType = "number", value = 0, invalidMessage, }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
function numbers({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = fnRegexp.number, nullable, inputFormat = "csv", inputType = "number", value = [], invalidMessage, }) {
    return {
        name,
        defaultValue,
        type,
        autoComplete,
        inputMode,
        hidden,
        regexp,
        nullable,
        inputFormat,
        inputType,
        value,
        invalidMessage,
    };
}
export default {
    string,
    strings,
    username,
    password,
    otp,
    rfc3339Time,
    lowerSnakeCase,
    ip,
    objectID,
    number,
    port,
    numbers,
    decimal,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjEvc2VydmVyLWFjdGlvbi9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFFaEMsU0FBUyxNQUFNLENBQUMsRUFDZixJQUFJLEVBQ0osWUFBWSxHQUFHLEVBQUUsRUFDakIsSUFBSSxHQUFHLE1BQU0sRUFDYixZQUFZLEVBQ1osU0FBUyxHQUFHLE1BQU0sRUFDbEIsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IsV0FBVyxHQUFHLE1BQU0sRUFDcEIsU0FBUyxHQUFHLFFBQVEsRUFDcEIsS0FBSyxHQUFHLEVBQUUsRUFDVixjQUFjLEdBQ29CO0lBQ2xDLE9BQU87UUFDTixJQUFJO1FBQ0osWUFBWTtRQUNaLElBQUk7UUFDSixZQUFZO1FBQ1osU0FBUztRQUNULE1BQU07UUFDTixNQUFNO1FBQ04sUUFBUTtRQUNSLFdBQVc7UUFDWCxTQUFTO1FBQ1QsS0FBSztRQUNMLGNBQWM7S0FDZCxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEVBQ2hCLElBQUksRUFDSixZQUFZLEdBQUcsRUFBRSxFQUNqQixJQUFJLEdBQUcsTUFBTSxFQUNiLFlBQVksRUFDWixTQUFTLEdBQUcsTUFBTSxFQUNsQixNQUFNLEVBQ04sTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQ3pCLFFBQVEsRUFDUixXQUFXLEdBQUcsTUFBTSxFQUNwQixTQUFTLEdBQUcsUUFBUSxFQUNwQixLQUFLLEdBQUcsRUFBRSxFQUNWLGNBQWMsR0FDb0I7SUFDbEMsT0FBTztRQUNOLElBQUk7UUFDSixZQUFZO1FBQ1osSUFBSTtRQUNKLFlBQVk7UUFDWixTQUFTO1FBQ1QsTUFBTTtRQUNOLE1BQU07UUFDTixRQUFRO1FBQ1IsV0FBVztRQUNYLFNBQVM7UUFDVCxLQUFLO1FBQ0wsY0FBYztLQUNkLENBQUM7QUFDSCxDQUFDO0FB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