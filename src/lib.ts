import { OpenAPIV3_1 } from "openapi-types";
import ReferenceObject = OpenAPIV3_1.ReferenceObject;

export function documentReference(location: string): ReferenceObject {
	return {
		$ref: `#/${location}`
	};
}

export function componentReference(location: string): ReferenceObject {
	return documentReference(`components/${location}`);
}

export function parameterReference(location: string): ReferenceObject {
	return componentReference(`parameters/${location}`);
}

export function responsesReference(location: string): ReferenceObject {
	return componentReference(`responses/${location}`);
}

export function schemaReference(id: string): ReferenceObject {
	return componentReference(`schemas/${id}`);
}

/*
 * Trims excess whitespace
 */
export function multiline(str: string): string {
	return str.split("\n")
		.filter((s) => s !== "")
		.map((s) => s.trim())
		.join("\n")
}
