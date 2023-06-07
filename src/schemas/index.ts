import { NamedSchemas } from "../../types/oas";
import accounts from "./accounts";
import common from "./common/";

export default function schemas(): NamedSchemas {
	return {
		...accounts(),
		...common(),
	}
}
