import { OpenAPIV3_1 } from "openapi-types";
import ParameterObject = OpenAPIV3_1.ParameterObject;

export default (): ParameterObject => ({
	name: "provider",
	in: "path",
	description: "The key to identify a payments provider by",
	required: true,
	schema: {
		type: "string"
	}
})
