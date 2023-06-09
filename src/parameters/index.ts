import { NamedParameters } from "../../types/oas";

import providerKey from "./provider-key";
import accountIdentifier from "./account-identifier";

export default (): NamedParameters => ({
	"account-identifier": accountIdentifier(),
	provider: providerKey()
})
