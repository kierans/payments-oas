import { NamedSchemas } from "../../../types/oas";

import currencyValue from "./currency-value";
import error from "./errors";
import resourceIdentifier from "./resource-identifier";
import validationError from "./validation-error";

export default (): NamedSchemas => ({
	"currency-value": currencyValue(),
	"error": error(),
	"resource-identifier": resourceIdentifier(),
	"validation-error": validationError()
})
