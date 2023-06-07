import { OpenAPIV3_1 } from "openapi-types";
import ReferenceObject = OpenAPIV3_1.ReferenceObject;
import SchemaObject = OpenAPIV3_1.SchemaObject;

export type NamedSchemas = Record<string, ReferenceObject | SchemaObject>;
