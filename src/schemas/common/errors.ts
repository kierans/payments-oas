import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	title: "Error",
	type: "object",
	properties: {
		message: {
			type: "string",
			description: "An optional human readable message of the error"
		}
	}
})
