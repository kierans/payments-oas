import { NamedSchemas } from "../../types/oas";
import accounts from "./accounts";
import common from "./common/";
import payments from "./payments";

export default function schemas(): NamedSchemas {
	return {
		...accounts(),
		...common(),
		...payments()
	}
}
