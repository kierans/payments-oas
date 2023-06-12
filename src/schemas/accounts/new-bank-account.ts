import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;
import { schemaReference } from "../../lib";

export default (): SchemaObject => ({
	type: "object",
	title: "NewBankAccount",
	description: "Details from a customer on a bank account they want to be added",
	allOf: [
		schemaReference("bank-account")
	]
})
