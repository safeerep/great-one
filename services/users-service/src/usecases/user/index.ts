import { findExistingUser_usecase } from "./findExistingUser";
import { findUserWithPhone_usecase } from "./findWithPhone";
import { findUserWithId_usecase } from "./findUserWithId";
import { register_usecase } from "./register";
import { login_usecase } from "./userLogin";
import { storeOtp_usecase } from "./storeOtp";
import { verifyOtp_usecase } from "./verifyOtp";

export = {
    findExistingUser_usecase,
    findUserWithPhone_usecase,
    findUserWithId_usecase,
    register_usecase,
    login_usecase,
    storeOtp_usecase,
    verifyOtp_usecase,
}