import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export default (): SchemaObject => ({
	title: "CurrencyValue",
	type: "string",
	pattern: "^\d+\.\d{2}",
	description: "A string representing a currency value",
	example: "0.32, 10.54, etc"
})
