import { NamedResponses } from "../../../types/oas";

import badRequest from "./bad-request";
import internalServer from "./internal-server";
import notFound from "./not-found";
import unauthorised from "./unauthorised";
import unprocessable from "./unprocessable";

export default (): NamedResponses => ({
	"bad-request": badRequest(),
	"internal-server": internalServer(),
	"not-found": notFound(),
	"unauthorised": unauthorised(),
	"unprocessable": unprocessable()
})
