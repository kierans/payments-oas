import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;
import { multiline, schemaReference } from "../../lib";

export default (): SchemaObject => ({
	type: "object",
	title: "PaymentRequestDetails",
	additionalProperties: false,
	properties: {
		amount: {
			...schemaReference("currency-value"),
			description: multiline(`Required if a partial amount of the total is going to an account.
			
			If absent, the total amount of the payment will sent to the destination account`)
		}
	}
})
