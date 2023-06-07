import { NamedSchemas } from "../../../types/oas";
import account from "./account";
import institution from "./institution";
import accountsList from "./accounts-list";

export default (): NamedSchemas => ({
	"account": account(),
	"accounts-list": accountsList(),
	"institution": institution()
})
