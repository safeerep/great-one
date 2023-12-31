import userSignupController from "./userSignup.controller";
import sendOtpController from "./sendOtp.controller";

export = (dependencies: any) => {
    return {
        sendOtpController: sendOtpController(dependencies),
        userSignupController: userSignupController(dependencies)
    }
}