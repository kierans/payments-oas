import { NamedSecuritySchemes } from "../../types/oas";

import oidcBearerToken from "./oidc-bearer-token";

export default function securitySchemes(): NamedSecuritySchemes {
	return {
		"oidc-bearer-token": oidcBearerToken()
	}
}
