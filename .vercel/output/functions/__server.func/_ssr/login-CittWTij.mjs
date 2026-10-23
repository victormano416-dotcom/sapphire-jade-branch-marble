import { x as require_jsx_runtime, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Boot, t as AuthScreen, v as useCurrentUserState } from "./use-current-user-HT_hS61i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CittWTij.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScreen, {});
}
//#endregion
export { Login as component };
