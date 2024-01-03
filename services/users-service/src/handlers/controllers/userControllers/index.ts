import userSignupController from "./userSignup";
import sendOtpForSignupController from "./sendOtpForSignup";
import loginController from "./login";
import googleAuthSucceedController from "./googleAuthSucceed";
import googleAuthFailedController from "./googleAuthFailed";
import checkAuthController from "./checkAuth";
import logoutController from "./logout";
import sendResetPasswordMail from "./sendResetPasswordMail";

export = (dependencies: any) => {
    return {
        sendOtpForSignupController: sendOtpForSignupController(dependencies),
        userSignupController: userSignupController(dependencies),
        loginController: loginController(dependencies),
        googleAuthSucceedController: googleAuthSucceedController(dependencies),
        googleAuthFailedController: googleAuthFailedController(),
        checkAuthController: checkAuthController(dependencies),
        logoutController: logoutController(),
        sendResetPasswordMailController: sendResetPasswordMail(dependencies),
    }
}