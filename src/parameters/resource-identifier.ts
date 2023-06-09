import { OpenAPIV3_1 } from "openapi-types";
import ParameterObject = OpenAPIV3_1.ParameterObject;

export default (name: string, description: string): ParameterObject => ({
	name,
	in: "path",
	description,
	required: true,
	schema: {
		type: "string"
	}
})
