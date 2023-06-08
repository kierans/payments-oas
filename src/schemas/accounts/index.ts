import { NamedSchemas } from "../../../types/oas";
import account from "./account";
import institution from "./institution";
import accountsList from "./accounts-list";
import accountStatus from "./account-status";

export default (): NamedSchemas => ({
	"account": account(),
	"accounts-list": accountsList(),
	"account-status": accountStatus(),
	"institution": institution()
})
