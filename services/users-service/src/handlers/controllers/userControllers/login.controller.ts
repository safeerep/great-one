import { Request, Response, NextFunction } from "express";
import signinValidationSchema from "../../../utils/validators/signin.validator";
import generateToken from "../../../utils/externalServices/tokenGenerator";
import bcrypt from "bcrypt";

export = (dependencies: any): any => {
  const {
    useCases: { findExistingUser_usecase },
  } = dependencies;

  const login = async (req: Request, res: Response, next: NextFunction) => {
    const userCredentials = req.body;
    console.log(userCredentials);
    try {
      // to validate the data from request with the actual data we need;
      await signinValidationSchema.validate(userCredentials, {
        abortEarly: true,
      });
    } catch (error: any) {
      const errors = error.inner.map((err: any) => ({
        [err.path]: err.message,
      }));
      return res.status(400).json({ success: false, message: errors[0] });
    }
    let existingUser;
    try {
      existingUser = await findExistingUser_usecase(dependencies).execute(
        userCredentials.email
      );
      console.log(existingUser);
      
      if (!existingUser) {
        return res
          .status(401)
          .json({ success: false, message: "invalid credentials" });
      }
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: "something went wrong" });
    }

    try {
        const isPasswordMatching = await bcrypt.compare(userCredentials.password, existingUser.password);
        if (isPasswordMatching) {
            const token = generateToken(existingUser._id) 
            req.session.userJwt = token;
            return res.status(200).json({ success: true, existingUser, message: 'successfully logged in'})
        }
        else return res.status(401).json({ success: false, message: 'invalid credentials'})
    } catch (error) {
        return res.status(401).json({ success: false, message: 'something went wrong'})
    }
  };

  return login;
};
