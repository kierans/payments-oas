import { NamedSchemas } from "../../../types/oas";

import paymentRequest from "./payment-request";
import paymentRequestDetails from "./payment-request-details";
import paymentOutcome from "./payment-outcome";
import payment from "./payment";
import transferRequest from "./transfer-request";

export default (): NamedSchemas => ({
	"payment": payment(),
	"payment-outcome": paymentOutcome(),
	"payment-request": paymentRequest(),
	"payment-request-details": paymentRequestDetails(),
	"transfer-request": transferRequest()
})
