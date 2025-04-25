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
function username({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[a-z][a-z|0-9]{3,20}$", nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "아이디를 확인하여 주십시오.", }) {
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
function password({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[a-z0-9A-Z~`!@#$%^&*\(\)\\-_=+\\[{\\]}\\\\\|;:'\",<.>/?]{7,20}$", nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "비밀번호를 확인하여 주십시오.", }) {
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
function otp({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[0-9]{6}$", nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "OTP 를 확인하여 주십시오.", }) {
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
function ip({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b", nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "IP 를 확인하여 주십시오.", }) {
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
function lowerSnakeCase({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[a-z0-9_]+$", nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "내용을 확인하여 주십시오. (lower_snake_case)", }) {
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
function rfc3339Time({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^((?:(\\d{4}-\\d{2}-\\d{2})T(\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?))(Z|[\\+-]\\d{2}:\\d{2})?)$", nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "시간을 확인하여 주십시오.", }) {
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
function objectID({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[a-z0-9]{24}$", nullable, inputFormat = "text", inputType = "string", value = "", invalidMessage = "ObjectID 값을 확인하여 주십시오.", }) {
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
function port({ name, defaultValue = "0", type = "number", autoComplete, inputMode = "numeric", hidden, regexp = "^[a-z0-9_]+$", nullable, inputFormat = "text", inputType = "number", value = 0, invalidMessage = "Port 번호를 확인하여 주십시오.", }) {
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
function number({ name, defaultValue = "0", type = "number", autoComplete, inputMode = "numeric", hidden, regexp = "^-?\\d+(\\.\\d+)?$", nullable, inputFormat = "text", inputType = "number", value = 0, invalidMessage, }) {
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
function numbers({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^-?\\d+(\\.\\d+)?$", nullable, inputFormat = "csv", inputType = "number", value = [], invalidMessage, }) {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyLWFjdGlvbi9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxTQUFTLE1BQU0sQ0FBQyxFQUNmLElBQUksRUFDSixZQUFZLEdBQUcsRUFBRSxFQUNqQixJQUFJLEdBQUcsTUFBTSxFQUNiLFlBQVksRUFDWixTQUFTLEdBQUcsTUFBTSxFQUNsQixNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEdBQUcsTUFBTSxFQUNwQixTQUFTLEdBQUcsUUFBUSxFQUNwQixLQUFLLEdBQUcsRUFBRSxFQUNWLGNBQWMsR0FDb0I7SUFDbEMsT0FBTztRQUNOLElBQUk7UUFDSixZQUFZO1FBQ1osSUFBSTtRQUNKLFlBQVk7UUFDWixTQUFTO1FBQ1QsTUFBTTtRQUNOLE1BQU07UUFDTixRQUFRO1FBQ1IsV0FBVztRQUNYLFNBQVM7UUFDVCxLQUFLO1FBQ0wsY0FBYztLQUNkLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsRUFDaEIsSUFBSSxFQUNKLFlBQVksR0FBRyxFQUFFLEVBQ2pCLElBQUksR0FBRyxNQUFNLEVBQ2IsWUFBWSxFQUNaLFNBQVMsR0FBRyxNQUFNLEVBQ2xCLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLFdBQVcsR0FBRyxLQUFLLEVBQ25CLFNBQVMsR0FBRyxRQUFRLEVBQ3BCLEtBQUssR0FBRyxFQUFFLEVBQ1YsY0FBYyxHQUNzQjtJQUNwQyxPQUFPO1FBQ04sSUFBSTtRQUNKLFlBQVk7UUFDWixJQUFJO1FBQ0osWUFBWTtRQUNaLFNBQVM7UUFDVCxNQUFNO1FBQ04sTUFBTTtRQUNOLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULEtBQUs7UUFDTCxjQUFjO0tBQ2QsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxFQUNqQixJQUFJLEVBQ0osWUFBWSxHQUFHLEVBQUUsRUFDakIsSUFB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