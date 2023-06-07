import { OpenAPIV3_1 } from "openapi-types";
import ResponseObject = OpenAPIV3_1.ResponseObject;

import { errors } from "./errors";
import { schemaReference } from "../../lib";

export default (): ResponseObject => errors("Invalid input", {
	type: "object",
	allOf: [
		schemaReference("error"),
		{
			type: "object",
			properties: {
				errors: {
					type: "array",
					description: "List of validation errors",
					items: schemaReference("validation-error")
				}
			},
			required: [
				"errors"
			]
		}
	]
})
