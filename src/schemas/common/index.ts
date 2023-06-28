import { NamedSchemas } from "../../../types/oas";

import currencyValue from "./currency-value";
import error from "./errors";
import paymentFailureReason from "./payment-failure-reason";
import resourceIdentifier from "./resource-identifier";
import validationError from "./validation-error";

export default (): NamedSchemas => ({
	"currency-value": currencyValue(),
	"error": error(),
	"payment-failure-reason": paymentFailureReason(),
	"resource-identifier": resourceIdentifier(),
	"validation-error": validationError()
})
