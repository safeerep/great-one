// import {
//   login_usecase,
//   register_usecase,
//   findExistingUser_usecase,
//   findUserWithPhone_usecase,
//   storeOtp_usecase,
//   verifyOtp_usecase,
// } from "../../usecases";

// const useCases: any = {
//   login_usecase,
//   register_usecase,
//   findExistingUser_usecase,
//   findUserWithPhone_usecase,
//   storeOtp_usecase,
//   verifyOtp_usecase,
// };
import { usecases } from "../../usecases";
import { userRepo } from "../../adapters/database/mongo/repositories";

const repositories: any = {
    userRepo
};

export = {
  usecases,
  repositories,
};
