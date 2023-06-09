import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;
import PathItemObject = OpenAPIV3_1.PathItemObject;

import {
	oidcBearerTokenSchemeReference, parameterReference,
	responsesReference,
	schemaReference
} from "../../lib";

const listAccounts: () => PathItemObject = () => ({
	get: {
		operationId: "listAccounts",
		summary: "List Accounts",
		description: "Get a list of accounts for the customer",
		tags: [
			"accounts"
		],
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
			"401": responsesReference("unauthorised"),
			"500": responsesReference("internal-server")
		}
	}
})

const addBankAccount: () => PathItemObject = () => ({
	post: {
		operationId: "addBankAccount",
		summary: "Add a bank account",
		description: "Add a bank account for the customer",
		tags: [
			"accounts"
		],
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
			"400": responsesReference("bad-request"),
			"401": responsesReference("unauthorised"),
			"500": responsesReference("internal-server")
		}
	}
})

const modifyAccount: () => PathItemObject = () => ({
	delete: {
		operationId: "deleteAccount",
		summary: "Delete Account",
		description: "Delete an account for a customer",
		tags: [
			"accounts"
		],
		security: [
			oidcBearerTokenSchemeReference([ "accounts:delete" ])
		],
		parameters: [
			parameterReference("account-identifier")
		],
		responses: {
			"204": {
				description: "Account removed successfully",
				content: {}
			},
			"401": responsesReference("unauthorised"),
			"422": responsesReference("unprocessable"),
			"500": responsesReference("internal-server")
		}
	}
})

export default (): PathsObject => ({
	"/account/{accountId}": modifyAccount(),
	"/accounts": listAccounts(),
	"/account/bank": addBankAccount()
})
