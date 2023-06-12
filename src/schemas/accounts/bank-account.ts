import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	type: "object",
	title: "BankAccount",
	description: "The minimum details required to address a bank account",
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
