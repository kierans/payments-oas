import { OpenAPIV3_1 } from "openapi-types";
import ParameterObject = OpenAPIV3_1.ParameterObject;
import ReferenceObject = OpenAPIV3_1.ReferenceObject;
import ResponseObject = OpenAPIV3_1.ResponseObject;
import SchemaObject = OpenAPIV3_1.SchemaObject;
import SecuritySchemeObject = OpenAPIV3_1.SecuritySchemeObject;

export type NamedParameters = Record<string, ReferenceObject | ParameterObject>;
export type NamedResponses = Record<string, ReferenceObject | ResponseObject>;
export type NamedSchemas = Record<string, ReferenceObject | SchemaObject>;
export type NamedSecuritySchemes = Record<string, ReferenceObject | SecuritySchemeObject>;
