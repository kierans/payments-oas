import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;
import { schemaReference } from "../../lib";

export default (): SchemaObject => ({
	type: "object",
	title: "TransferRequest",
	description: "Details of a transfer to one or more parties",
	additionalProperties: false,
		allOf: [
				schemaReference("payment-request"),
				{
						type: "object",
						additionalProperties: false,
						properties: {
								description: {
									type: "string",
									description: "A description of the transfer."
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
							"disbursements"
						]
				}
		]
});