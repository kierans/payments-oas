import { OpenAPIV3_1 } from "openapi-types";
import ReferenceObject = OpenAPIV3_1.ReferenceObject;
import ResponseObject = OpenAPIV3_1.ResponseObject;
import SchemaObject = OpenAPIV3_1.SchemaObject;

export type NamedResponses = Record<string, ReferenceObject | ResponseObject>;
export type NamedSchemas = Record<string, ReferenceObject | SchemaObject>;
