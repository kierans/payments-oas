import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	type: "string",
	title: "AccountStatus",
	enum: [
		"active",
		"inactive"
	]
})
