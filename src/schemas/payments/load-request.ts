import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;
import { schemaReference } from "../../lib";

export default (): SchemaObject => ({
	type: "object",
	title: "LoadRequest",
	description: "Details of load of funds",
	additionalProperties: false,
		allOf: [
				schemaReference("payment-request")
		]
});