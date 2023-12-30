import userSignupController from "./userSignup.controller";

export = (dependencies: any) => {
    return {
        userSignupController: userSignupController(dependencies)
    }
}