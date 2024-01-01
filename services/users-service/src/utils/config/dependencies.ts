import {
  login_usecase,
  register_usecase,
  findExistingUser_usecase,
  findUserWithPhone_usecase,
  storeOtp_usecase,
  verifyOtp_usecase,
} from "../../usecases";

import { userRepo } from "../../adapters/database/mongo/repositories";

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
