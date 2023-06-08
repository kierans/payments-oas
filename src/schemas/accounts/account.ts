import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;
import { schemaReference } from "../../lib";

export default (): SchemaObject => ({
	type: "object",
	title: "Account",
	additionalProperties: false,
	allOf: [
		schemaReference("new-bank-account"),
		{
			properties: {
				id: schemaReference("resource-identifier"),
				nickname: {
					type: "string"
				},
				status: schemaReference("account-status"),
				institution: schemaReference("institution")
			},
			required: [
				"id",
				"nickname",
				"institution"
			]
		}
	]
})
