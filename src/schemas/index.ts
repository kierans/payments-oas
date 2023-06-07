import { NamedSchemas } from "../../types/oas";
import accounts from "./accounts";
import resourceIdentifier from "./common/resource-identifier";

export default function schemas(): NamedSchemas {
	return {
		...accounts(),
		"resource-identifier": resourceIdentifier()
	}
}
