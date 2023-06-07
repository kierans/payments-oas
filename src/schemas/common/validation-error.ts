import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	type: "object",
	title: "ValidationError",
	properties: {
		location: {
			type: "string",
			description: "The location in the request",
			example: "body.data.consumer"
		},
		message: {
			type: "string",
			description: "A human-readable description of the error",
			example: "must have required property 'consumer'"
		},
		constraints: {
			type: "object",
			description: "A map of violated constraints to the property name that violated the constraint",
			additionalProperties: true,
			example: {
				"missingProperty": "must have required property 'consumer'"
			}
		}
	},
	required: [
		"location",
		"message",
		"constraints"
	]
})
