import { findExistingUser_usecase } from "./findExistingUser.usecase";
import { findUserWithPhone_usecase } from "./findWithPhone.usecase";
import { findUserWithId_usecase } from "./findUserWithId.usecase";
import { register_usecase } from "./register.usecase";
import { login_usecase } from "./userLogin.usecase";
import { storeOtp_usecase } from "./storeOtp.usecase";
import { verifyOtp_usecase } from "./verifyOtp.usecase";

export = {
    findExistingUser_usecase,
    findUserWithPhone_usecase,
    findUserWithId_usecase,
    register_usecase,
    login_usecase,
    storeOtp_usecase,
    verifyOtp_usecase,
}