import { OpenAPIV3_1 } from "openapi-types";
import ResponseObject = OpenAPIV3_1.ResponseObject;

import { errors } from "./errors";
import { schemaReference } from "../../lib";

export default (): ResponseObject => errors("Payment Failure", {
	type: "object",
	allOf: [
		schemaReference("error"),
		{
			type: "object",
			properties: {
				reasons: {
					type: "array",
					description: "List of reasons a payment might fail",
					items: schemaReference("payment-failure-reason")
				}
			},
			required: [
				"errors"
			]
		}
	]
})
