import { NamedSchemas } from "../../../types/oas";

import paymentRequest from "./payment-request";
import paymentRequestDetails from "./payment-request-details";

export default (): NamedSchemas => ({
	"payment-request": paymentRequest(),
	"payment-request-details": paymentRequestDetails()
})
