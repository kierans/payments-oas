import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	type: "object",
	title: "NewBankAccount",
	properties: {
		accountName: {
			type: "string"
		},
		bsb: {
			type: "string",
			pattern: "\d{3}-\d{3}"
		},
		accountNumber: {
			type: "string"
		}
	},
	required: [
		"accountName",
		"bsb",
		"accountNumber",
	]
})
