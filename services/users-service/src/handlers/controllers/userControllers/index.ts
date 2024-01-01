import userSignupController from "./userSignup.controller";
import sendOtpForSignupController from "./sendOtpForSignup.controller";

export = (dependencies: any) => {
    return {
        sendOtpController: sendOtpForSignupController(dependencies),
        userSignupController: userSignupController(dependencies)
    }
}