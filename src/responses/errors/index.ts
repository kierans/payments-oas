import { NamedResponses } from "../../../types/oas";

import badRequest from "./bad-request";
import internalServer from "./internal-server";
import notFound from "./not-found";
import paymentFailure from "./payment-failure";
import unauthorised from "./unauthorised";

export default (): NamedResponses => ({
	"bad-request": badRequest(),
	"internal-server": internalServer(),
	"not-found": notFound(),
	"payment-failure": paymentFailure(),
	"unauthorised": unauthorised()
})
