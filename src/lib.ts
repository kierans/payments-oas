import * as fs from "fs";
import * as path from "path";

import { OpenAPIV3_1 } from "openapi-types";
import ReferenceObject = OpenAPIV3_1.ReferenceObject;
import SecurityRequirementObject = OpenAPIV3_1.SecurityRequirementObject;

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

export function securitySchemeReference(id: string, scopes: string[]): SecurityRequirementObject {
	return {
		[id]: scopes
	}
}

export const oidcBearerTokenSchemeReference = (scopes: string[]): SecurityRequirementObject =>
	securitySchemeReference("oidc-bearer-token", scopes)

export const readmarkdown = (filename: string): string =>
	fs.readFileSync(path.join(__dirname, filename), { encoding: "utf8" });

/*
 * Trims excess whitespace
 */
export function multiline(str: string): string {
	return str.split("\n")
		.filter((s) => s !== "")
		.map((s) => s.trim())
		.join("\n")
}
