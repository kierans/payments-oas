import { OpenAPIV3_1 } from "openapi-types";
import InfoObject = OpenAPIV3_1.InfoObject;

import responses from "./responses";
import schemas from "./schemas";
import securitySchemes from "./security";

export const paymentsApi: () => OpenAPIV3_1.Document  = () => ({
	openapi: "3.1.0",

	info: {
		title: "Payments Specification",
		version: "v1",
		license: {
			name: "UNLICENSED",
			url: "https://example.com/license-url"
		}
	} as InfoObject,

	servers: [
		{
			url: "https://localhost:3000",
			description: "Local development"
		}
	],

	components: {
		parameters: {},
		responses: responses(),
		securitySchemes: securitySchemes(),
		schemas: schemas()
	},

	paths: {}
})
