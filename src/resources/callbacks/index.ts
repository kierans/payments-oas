import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;
import PathItemObject = OpenAPIV3_1.PathItemObject;
import { parameterReference, responsesReference } from "../../lib";

const paymentCallback: () => PathItemObject = () => ({
	post: {
		operationId: "onPayment",
		summary: "Payment Callback",
		description: "Receive updates from a payments provider about a payment",
		tags: [
			"callbacks"
		],
		security: [
			{}
		],
		parameters: [
			parameterReference("provider")
		],
		requestBody: {
			content: {
				"application/json": {
					schema: {
						type: "object",
						title: "Anything",
						additionalProperties: true
					}
				}
			}
		},
		responses: {
			"204": {
				description: "If the event is received and processed",
				content: {}
			},
			"400": responsesReference("bad-request"),
			"500": responsesReference("internal-server")
		}
	}
})

const paymentAgreementCallback: () => PathItemObject = () => ({
	post: {
		operationId: "onPaymentAgreement",
		summary: "Payment Agreement Callback",
		description: "Receive updates from a payments provider about an agreement",
		tags: [
			"callbacks"
		],
		security: [
			{}
		],
		parameters: [
			parameterReference("provider")
		],
		requestBody: {
			content: {
				"application/json": {
					schema: {
						type: "object",
						title: "Anything",
						additionalProperties: true
					}
				}
			}
		},
		responses: {
			"204": {
				description: "If the event is received and processed",
				content: {}
			},
			"400": responsesReference("bad-request"),
			"500": responsesReference("internal-server")
		}
	}
})

export default (): PathsObject => ({
	"/callbacks/{provider}/payment": paymentCallback(),
	"/callbacks/{provider}/paymentagreement": paymentAgreementCallback()
})
