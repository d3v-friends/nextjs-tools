import {FnComponent, FnVoid, Position} from "@root";

export const errEmptyGraphqlResponse = "empty_graphql_response";
export const errUnexpectedGraphqlError = "unexpected_graphql_error";
export const httpHeaderAuthorization = "Authorization";
export const httpHeaderContentType = "Content-Type";
export const httpHeaderUserAgent = "User-Agent";
export const httpXForwardedHost = "X-Forwarded-Host";
export const contentTypeApplicationJson = "Application/json";

export const fnVoid: FnVoid = () => {};
export const fnVoidComponent: FnComponent<null> = () => "";
export const initPosition: Position = {
	left: 0,
	top: 0,
	width: 0,
	height: 0,
};
