function string({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp, nullable, inputFormat = "text", inputType = "string", value = "", }) {
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
    };
}
function strings({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp, nullable, inputFormat = "csv", inputType = "string", value = [], }) {
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
    };
}
function username({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[a-z][a-z|0-9]{3,20}$", nullable, inputFormat = "text", inputType = "string", value = "", }) {
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
    };
}
function password({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[a-z0-9A-Z~`!@#$%^&*\(\)\\-_=+\\[{\\]}\\\\\|;:'\",<.>/?]{7,20}$", nullable, inputFormat = "text", inputType = "string", value = "", }) {
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
    };
}
function otp({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[0-9]{6}$", nullable, inputFormat = "text", inputType = "string", value = "", }) {
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
    };
}
function ip({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b", nullable, inputFormat = "text", inputType = "string", value = "", }) {
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
    };
}
function lowerSnakeCase({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[a-z0-9_]+$", nullable, inputFormat = "text", inputType = "string", value = "", }) {
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
    };
}
function rfc3339Time({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^((?:(\\d{4}-\\d{2}-\\d{2})T(\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?))(Z|[\\+-]\\d{2}:\\d{2})?)$", nullable, inputFormat = "text", inputType = "string", value = "", }) {
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
    };
}
function objectID({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^[a-z0-9]{24}$", nullable, inputFormat = "text", inputType = "string", value = "", }) {
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
    };
}
function port({ name, defaultValue = "0", type = "number", autoComplete, inputMode = "numeric", hidden, regexp = "^[a-z0-9_]+$", nullable, inputFormat = "text", inputType = "number", value = 0, }) {
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
    };
}
function number({ name, defaultValue = "0", type = "number", autoComplete, inputMode = "numeric", hidden, regexp = "^-?\\d+(\\.\\d+)?$", nullable, inputFormat = "text", inputType = "number", value = 0, }) {
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
    };
}
function numbers({ name, defaultValue = "", type = "text", autoComplete, inputMode = "text", hidden, regexp = "^-?\\d+(\\.\\d+)?$", nullable, inputFormat = "csv", inputType = "number", value = [], }) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyLWFjdGlvbi9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxTQUFTLE1BQU0sQ0FBQyxFQUNmLElBQUksRUFDSixZQUFZLEdBQUcsRUFBRSxFQUNqQixJQUFJLEdBQUcsTUFBTSxFQUNiLFlBQVksRUFDWixTQUFTLEdBQUcsTUFBTSxFQUNsQixNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEdBQUcsTUFBTSxFQUNwQixTQUFTLEdBQUcsUUFBUSxFQUNwQixLQUFLLEdBQUcsRUFBRSxHQUN3QjtJQUNsQyxPQUFPO1FBQ04sSUFBSTtRQUNKLFlBQVk7UUFDWixJQUFJO1FBQ0osWUFBWTtRQUNaLFNBQVM7UUFDVCxNQUFNO1FBQ04sTUFBTTtRQUNOLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULEtBQUs7S0FDTCxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEVBQ2hCLElBQUksRUFDSixZQUFZLEdBQUcsRUFBRSxFQUNqQixJQUFJLEdBQUcsTUFBTSxFQUNiLFlBQVksRUFDWixTQUFTLEdBQUcsTUFBTSxFQUNsQixNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEdBQUcsS0FBSyxFQUNuQixTQUFTLEdBQUcsUUFBUSxFQUNwQixLQUFLLEdBQUcsRUFBRSxHQUMwQjtJQUNwQyxPQUFPO1FBQ04sSUFBSTtRQUNKLFlBQVk7UUFDWixJQUFJO1FBQ0osWUFBWTtRQUNaLFNBQVM7UUFDVCxNQUFNO1FBQ04sTUFBTTtRQUNOLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULEtBQUs7S0FDTCxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEVBQ2pCLElBQUksRUFDSixZQUFZLEdBQUcsRUFBRSxFQUNqQixJQUFJLEdBQUcsTUFBTSxFQUNiLFlBQVksRUFDWixTQUFTLEdBQUcsTUFB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