import { NamedSchemas } from "../../../types/oas";

import error from "./errors";
import resourceIdentifier from "./resource-identifier";

export default (): NamedSchemas => ({
	"error": error(),
	"resource-identifier": resourceIdentifier()
})
