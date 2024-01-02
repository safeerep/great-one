import userSignupController from "./userSignup.controller";
import sendOtpForSignupController from "./sendOtpForSignup.controller";
import loginController from "./login.controller";
import googleAuthSucceedController from "./googleAuthSucceed.controll";
import googleAuthFailedController from "./googleAuthFailed.controller";
import checkAuthController from "./checkAuth.controller";

export = (dependencies: any) => {
    return {
        sendOtpForSignupController: sendOtpForSignupController(dependencies),
        userSignupController: userSignupController(dependencies),
        loginController: loginController(dependencies),
        googleAuthSucceedController: googleAuthSucceedController(dependencies),
        googleAuthFailedController: googleAuthFailedController(),
        checkAuthController: checkAuthController(dependencies),
    }
}