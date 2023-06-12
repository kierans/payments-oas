import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;
import PathItemObject = OpenAPIV3_1.PathItemObject;
import { oidcBearerTokenSchemeReference, responsesReference, schemaReference } from "../../lib";

const makePayment = (): PathItemObject => ({
	post: {
		operationId: "makePayment",
		summary: "Make Payment",
		description: "Make a payment to one or more parties",
		tags: [
			"payments"
		],
		security: [
			oidcBearerTokenSchemeReference([ "accounts:credit", "accounts:debit" ]),
		],
		requestBody: {
			description: "Details of the payment",
			required: true,
			content: {
				"application/json": {
					schema: schemaReference("payment-request")
				}
			}
		},
		responses: {
			"200": {
				description: "Payment completed",
				content: {
					"application/json": {
						schema: {
							type: "string",
							default: "TODO"
						}
					}
				}
			},
			"400": responsesReference("bad-request"),
			"401": responsesReference("unauthorised"),
			"500": responsesReference("internal-server")
		}
	}
})

export default (): PathsObject => ({
	"/payment": makePayment()
});
