import { NamedResponses } from "../../../types/oas";

import badRequest from "./bad-request";
import notFound from "./not-found";
import unauthorised from "./unauthorised";
import unprocessable from "./unprocessable";

export default (): NamedResponses => ({
	"bad-request": badRequest(),
	"not-found": notFound(),
	"unauthorised": unauthorised(),
	"unprocessable": unprocessable()
})
