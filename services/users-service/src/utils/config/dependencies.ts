import {
  login_usecase,
  register_usecase,
  findExistingUser_usecase,
  findUserWithPhone_usecase,
  storeOtp_usecase,
  verifyOtp_usecase,
} from "../../usecases";

import { userRepo } from "../../adapters/database/mongo/repositories";
// import userRepo from "../../adapters/database/mongo/repositories/user/user.repo";

const useCases: any = {
  login_usecase,
  register_usecase,
  findExistingUser_usecase,
  findUserWithPhone_usecase,
  storeOtp_usecase,
  verifyOtp_usecase,
};

const repositories: any = {
    userRepo
};

export = {
  useCases,
  repositories,
};
