import adminLogin from "./adminLogin";
import adminAuthCheck from "./adminAuthCheck";
import adminLogout from "./adminLogout";


export = ( dependencies: any) => {
    return {
        adminLoginController: adminLogin(dependencies),
        adminAuthCheckController: adminAuthCheck(dependencies),
        adminLogoutController: adminLogout(),
    }
}