import { OpenAPIV3_1 } from "openapi-types";
import ParameterObject = OpenAPIV3_1.ParameterObject;
import resourceIdentifier from "./resource-identifier";

export default (): ParameterObject =>
	resourceIdentifier("accountId", "The id for the account")
