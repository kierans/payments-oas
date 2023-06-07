import { OpenAPIV3_1 } from "openapi-types";
import ResponseObject = OpenAPIV3_1.ResponseObject;
import SchemaObject = OpenAPIV3_1.SchemaObject;

import { schemaReference } from "../../lib";

export function errors(description: string, schema?: SchemaObject): ResponseObject {
	return {
		description,
		content: {
			"application/json": {
				schema: schema || schemaReference("error")
			}
		}
	}
}
