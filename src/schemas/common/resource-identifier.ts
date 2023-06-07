import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	title: "ResourceIdentifier",
	type: "string",
	format: "uuid",
	description: "A unique identifier for the resource",
	example: "76cb7b70-4369-11ec-80ae-d778a22d0de3"
})
