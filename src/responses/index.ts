import { NamedResponses } from "../../types/oas";

import errors from "./errors";

export default (): NamedResponses => ({
	...errors()
})
