import { NamedSchemas } from "../../../types/oas";

import paymentRequest from "./payment-request";
import paymentRequestDetails from "./payment-request-details";
import paymentOutcome from "./payment-outcome";
import payment from "./payment";
import purchaseRequest from "./purchase-request";
import transferRequest from "./transfer-request";

export default (): NamedSchemas => ({
	"payment": payment(),
	"payment-outcome": paymentOutcome(),
	"payment-request": paymentRequest(),
	"payment-request-details": paymentRequestDetails(),
	"purchase-request": purchaseRequest(),
	"transfer-request": transferRequest()
})
