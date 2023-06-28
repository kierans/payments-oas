import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;
import PathItemObject = OpenAPIV3_1.PathItemObject;
import { oidcBearerTokenSchemeReference, responsesReference, schemaReference } from "../../lib";

const purchase = (): PathItemObject => ({
	post: {
		operationId: "makePurchase",
		summary: "Make a purchase",
		description: "Make a purchase with a merchant",
		tags: [
			"payments"
		],
		security: [
			oidcBearerTokenSchemeReference([ "accounts:debit" ]),
		],
		requestBody: {
			description: "Details of the purchase",
			required: true,
			content: {
				"application/json": {
					schema: schemaReference("purchase-request")
				}
			}
		},
		responses: {
			"200": {
				description: "Payment completed",
				content: {
					"application/json": {
						schema: schemaReference("payment")
					}
				}
			},
			"400": responsesReference("bad-request"),
			"401": responsesReference("unauthorised"),
			"422": responsesReference("payment-failure"),
			"500": responsesReference("internal-server")
		}
	}
})

const transferMoney = (): PathItemObject => ({
	post: {
		operationId: "transferMoney",
		summary: "Transfer Money",
		description: "Transfer money to one or more parties",
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
					schema: schemaReference("transfer-request")
				}
			}
		},
		responses: {
			"200": {
				description: "Payment completed",
				content: {
					"application/json": {
						schema: schemaReference("payment")
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
	"/payments/purchase": purchase(),
	"/payments/transfer": transferMoney()
});
