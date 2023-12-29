import {
  register_usecase,
  findExistingUser_usecase,
  login_usecase,
} from "../../usecases";
// import { userRepo } from "../../adapters/database/mongo/repositories/user"
// import userRepo  from "../../adapters/database/mongo/repositories/user/user.repo";
// import { createNewUser,getUserData, userLogin } from "../../adapters/database/mongo/repositories/user";
import { userRepo } from "../../adapters/database/mongo/repositories";
// import userRepo from "../../adapters/database/mongo/repositories/user/user.repo";

const useCases: any = {
  register_usecase,
  findExistingUser_usecase,
};

const repositories: any = {
    userRepo
};

export = {
  useCases,
  repositories,
};
