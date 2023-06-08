import { OpenAPIV3_1 } from "openapi-types";
import InfoObject = OpenAPIV3_1.InfoObject;

import { multiline, readmarkdown } from "./lib";

import resources from "./resources";
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
		},
		description: multiline(readmarkdown("info.md"))
	} as InfoObject,

	tags: [
		{
			name: "accounts",
			"x-displayName": "Accounts"
		}
	],

	"x-tagGroups": [
		{
			name: "Account Management",
			tags: [
				"accounts"
			]
		}
	],

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

	paths: resources()
})
