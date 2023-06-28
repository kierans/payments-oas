import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;
import { schemaReference } from "../../lib";

export default (): SchemaObject => ({
	type: "object",
	title: "PurchaseRequest",
	description: "Details of a purchase",
	additionalProperties: false,
		allOf: [
				schemaReference("payment-request"),
				{
						type: "object",
						additionalProperties: false,
						properties: {
								reference: {
									type: "string",
									description: "Information about the purchase"
								},
								recipient: {
									...schemaReference("resource-identifier"),
									description: "The ID of a recipient already known to the API"
								}
						},
						required: [
							"reference",
							"recipient"
						]
				}
		]
});