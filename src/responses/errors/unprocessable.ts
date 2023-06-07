import { OpenAPIV3_1 } from "openapi-types";
import ResponseObject = OpenAPIV3_1.ResponseObject;

import { errors } from "./errors";

export default (): ResponseObject => errors("The provided ID is not known")
