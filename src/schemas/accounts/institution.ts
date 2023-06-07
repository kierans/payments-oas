import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	title: "Institution",
	type: "object",
	properties: {
		key: {
			type: "string"
		},
		displayName: {
			type: "string"
		}
	},
	required: [
		"key",
		"displayName"
	]
})
