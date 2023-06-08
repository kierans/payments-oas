import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;
import PathItemObject = OpenAPIV3_1.PathItemObject;

import {
	oidcBearerTokenSchemeReference,
	responsesReference,
	schemaReference
} from "../../lib";

const listAccounts: () => PathItemObject = () => ({
	get: {
		operationId: "listAccounts",
		summary: "List Accounts",
		description: "Get a list of accounts for the customer",
		security: [
			oidcBearerTokenSchemeReference([ "accounts:list" ]),
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

const addBankAccount: () => PathItemObject = () => ({
	post: {
		operationId: "addBankAccount",
		summary: "Add a bank account",
		description: "Add a bank account for the customer",
		security: [
			oidcBearerTokenSchemeReference([ "accounts:add" ]),
		],
		requestBody: {
			description: "The account to add",
			required: true,
			content: {
				"application/json": {
					schema: schemaReference("new-bank-account")
				}
			}
		},
		responses: {
			"204": {
				description: "Account added",
				content: {}
			},
			"401": responsesReference("unauthorised")
		}
	}
})

export default (): PathsObject => ({
	"/accounts": listAccounts(),
	"/account/bank": addBankAccount()
})
