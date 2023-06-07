import { NamedSchemas } from "../../../types/oas";

import error from "./errors";
import resourceIdentifier from "./resource-identifier";
import validationError from "./validation-error";

export default (): NamedSchemas => ({
	"error": error(),
	"resource-identifier": resourceIdentifier(),
	"validation-error": validationError()
})
