import { OpenAPIV3_1 } from "openapi-types";
import HttpSecurityScheme = OpenAPIV3_1.HttpSecurityScheme;

import { multiline } from "../lib";

export default function oidcBearerToken(): HttpSecurityScheme {
	return {
		description: multiline(`
			A JWT bearer token issued by the API IDP
			
			The server will use the Issuer property to retrieve the OIDC Provider metadata and verify
			the JWT.
			
			See https://openid.net/specs/openid-connect-discovery-1_0.html
		`),
		type: "http",
		scheme: "Bearer"
	}
}
