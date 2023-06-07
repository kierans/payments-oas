import { NamedSchemas } from "../../../types/oas";
import account from "./account";
import institution from "./institution";

export default (): NamedSchemas => ({
	"account": account(),
	"institution": institution()
})
