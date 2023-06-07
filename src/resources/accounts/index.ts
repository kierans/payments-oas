import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;
import PathItemObject = OpenAPIV3_1.PathItemObject;

import { responsesReference, schemaReference, securitySchemeReference } from "../../lib";

const listAccounts: () => PathItemObject = () => ({
	get: {
		operationId: "listAccounts",
		summary: "List Accounts",
		description: "Get a list of accounts for the customer",
		security: [
			securitySchemeReference("oidc-bearer-token", [ "accounts:list" ])
		],
		responses: {
			"200": {
				description: "The list of accounts for the customer",
				content: {
					"application/json": {
						schema: schemaReference("accounts-list")
					}
				}
			},
			"401": responsesReference("unauthorised")
		}
	}
})

export default (): PathsObject => ({
	"/accounts": listAccounts()
})
