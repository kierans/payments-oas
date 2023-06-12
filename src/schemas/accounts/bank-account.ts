import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	type: "object",
	title: "BankAccount",
	description: "The minimum details required to address a bank account",
	properties: {
		accountName: {
			type: "string",
			description: "The name of the account",
			example: "Bruce Wayne"
		},
		bsb: {
			type: "string",
			description: "The BSB for the account",
			pattern: "\d{3}-\d{3}",
			example: "123-456"
		},
		accountNumber: {
			type: "string",
			description: "The account number",
			example: "123456789"
		}
	},
	required: [
		"accountName",
		"bsb",
		"accountNumber",
	]
})
