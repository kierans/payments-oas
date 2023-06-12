import { NamedSchemas } from "../../../types/oas";
import account from "./account";
import accountsList from "./accounts-list";
import accountStatus from "./account-status";
import institution from "./institution";
import newBankAccount from "./new-bank-account";
import bankAccount from "./bank-account";

export default (): NamedSchemas => ({
	"account": account(),
	"accounts-list": accountsList(),
	"account-status": accountStatus(),
	"bank-account": bankAccount(),
	"institution": institution(),
	"new-bank-account": newBankAccount()
})
