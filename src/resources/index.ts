import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;

import accounts from "./accounts";

export default (): PathsObject => ({
	...accounts()
})
