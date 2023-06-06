import { paymentsApi } from "./index";

const spec = paymentsApi();

console.log(JSON.stringify(spec, null, 2));
