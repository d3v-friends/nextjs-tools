import { fnRegexp } from "..";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyLWFjdGlvbi9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFrQixNQUFNLElBQUksQ0FBQztBQUU3QyxTQUFTLE1BQU0sQ0FBQyxFQUNmLElBQUksRUFDSixZQUFZLEdBQUcsRUFBRSxFQUNqQixJQUFJLEdBQUcsTUFBTSxFQUNiLFlBQVksRUFDWixTQUFTLEdBQUcsTUFBTSxFQUNsQixNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEdBQUcsTUFBTSxFQUNwQixTQUFTLEdBQUcsUUFBUSxFQUNwQixLQUFLLEdBQUcsRUFBRSxFQUNWLGNBQWMsR0FDb0I7SUFDbEMsT0FBTztRQUNOLElBQUk7UUFDSixZQUFZO1FBQ1osSUFBSTtRQUNKLFlBQVk7UUFDWixTQUFTO1FBQ1QsTUFBTTtRQUNOLE1BQU07UUFDTixRQUFRO1FBQ1IsV0FBVztRQUNYLFNBQVM7UUFDVCxLQUFLO1FBQ0wsY0FBYztLQUNkLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsRUFDaEIsSUFBSSxFQUNKLFlBQVksR0FBRyxFQUFFLEVBQ2pCLElBQUksR0FBRyxNQUFNLEVBQ2IsWUFBWSxFQUNaLFNBQVMsR0FBRyxNQUFNLEVBQ2xCLE1BQU0sRUFDTixNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFDekIsUUFBUSxFQUNSLFdBQVcsR0FBRyxNQUFNLEVBQ3BCLFNBQVMsR0FBRyxRQUFRLEVBQ3BCLEtBQUssR0FBRyxFQUFFLEVBQ1YsY0FBYyxHQUNvQjtJQUNsQyxPQUFPO1FBQ04sSUFBSTtRQUNKLFlBQVk7UUFDWixJQUFJO1FBQ0osWUFBWTtRQUNaLFNBQVM7UUFDVCxNQUFNO1FBQ04sTUFBTTtRQUNOLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULEtBQUs7UUFDTCxjQUFjO0tBQ2QsQ0FBQztBQUNILENB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