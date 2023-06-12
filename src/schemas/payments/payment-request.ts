import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;
import { schemaReference } from "../../lib";

export default (): SchemaObject => ({
	type: "object",
	title: "PaymentRequest",
	description: "Details of a payment to be made",
	additionalProperties: false,
	properties: {
		totalAmount: {
			...schemaReference("currency-value"),
			description: "The total value of the payment"
		},
		description: {
			type: "string",
			description: "The reason for the payment"
		},
		source: {
			...schemaReference("resource-identifier"),
			description: "The ID of an account already known to the API"
		},
		disbursements: {
			type: "array",
			items: {
				oneOf: [
					{
						allOf: [
							schemaReference("bank-account"),
							schemaReference("payment-request-details")
						]
					}
				]
			}
		}
	},
	required: [
		"totalAmount",
		"source",
		"disbursements"
	]
});
