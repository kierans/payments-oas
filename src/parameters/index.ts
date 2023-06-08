import { NamedParameters } from "../../types/oas";

import providerKey from "./provider-key";

export default (): NamedParameters => ({
	provider: providerKey()
})
