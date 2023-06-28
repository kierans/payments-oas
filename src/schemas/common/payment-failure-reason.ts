import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	type: "object",
	title: "PaymentFailureReason",
	properties: {
		location: {
			type: "string",
			description: "The location in the request",
			example: "body.data.totalAmount"
		},
		message: {
			type: "string",
			description: "A human-readable description of the reason",
			example: "amount to be debited exceeds available funds"
		},
		constraints: {
			type: "object",
			description: "A map of violated constraints to the property name that violated the constraint",
			additionalProperties: true,
			example: {
				"totalAmount": "amount exceeds available funds"
			}
		}
	},
	required: [
		"location",
		"message",
		"constraints"
	]
})
