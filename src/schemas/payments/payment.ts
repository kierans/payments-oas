import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;
import { schemaReference } from "../../lib";

export default (): SchemaObject => ({
	type: "object",
	additionalProperties: false,
	properties: {
		paymentId: {
			type: "string"
		},
		outcome: schemaReference("payment-outcome")
	},
	required: [
		"paymentId",
		"outcome"
	]
})
