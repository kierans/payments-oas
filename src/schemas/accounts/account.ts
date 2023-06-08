import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;
import { schemaReference } from "../../lib";

export default (): SchemaObject => ({
	type: "object",
	title: "Account",
	additionalProperties: false,
	properties: {
		id: schemaReference("resource-identifier"),
		nickname: {
			type: "string"
		},
		accountName: {
			type: "string"
		},
		bsb: {
			type: "string",
			pattern: "\d{3}-\d{3}"
		},
		accountNumber: {
			type: "string"
		},
		status: schemaReference("account-status"),
		institution: schemaReference("institution")
	},
	required: [
		"id",
		"nickname",
		"accountName",
		"bsb",
		"accountNumber",
		"institution"
	]
})
