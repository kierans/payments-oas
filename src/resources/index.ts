import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;

import accounts from "./accounts";
import callbacks from "./callbacks";
import payments from "./payments";

export default (): PathsObject => ({
	...accounts(),
	...payments(),
	...callbacks()
})
