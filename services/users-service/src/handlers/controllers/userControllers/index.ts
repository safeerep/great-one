import userSignupController from "./userSignup.controller";
import sendOtpForSignupController from "./sendOtpForSignup.controller";
import loginController from "./login.controller";
import googleAuthSucceedController from "./googleAuthSucceed.controll";
import googleAuthFailedController from "./googleAuthFailed.controller";

export = (dependencies: any) => {
    return {
        sendOtpForSignupController: sendOtpForSignupController(dependencies),
        userSignupController: userSignupController(dependencies),
        loginController: loginController(dependencies),
        googleAuthSucceedController: googleAuthSucceedController(),
        googleAuthFailedController: googleAuthFailedController(),
    }
}