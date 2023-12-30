import { Request, Response, NextFunction } from "express";
import signupValidationSchema from "../../../utils/validators/signup.validator";
import bcrypt from "bcrypt";

export = (dependencies: any): any => {
  const {
    useCases: { findExistingUser_usecase, register_usecase, verifyOtp_usecase },
  } = dependencies;

  const registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userCredentials = req.body;
    console.log(userCredentials);
    try {
      let otpIsMatching = await verifyOtp_usecase(dependencies).execute(
        userCredentials?.email,
        userCredentials?.otp
      );
      if (!otpIsMatching)
        return res
          .status(401)
          .json({ success: false, message: "otp is not matching" });
      else {
        console.log(`ok fine otp`);
      }
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: 'something went wrong'})
    }

    try {
      // to validate the data from request with the actual data we need;
      await signupValidationSchema.validate(userCredentials, {
        abortEarly: true,
      });
    } catch (error: any) {
      console.log(`validation error:`, error);
      const errors = error.inner.map((err: any) => ({
        [err.path]: err.message,
      }));
      return res.status(400).json({ success: false, errors });
    }
    try {
      // to check email is already existing or not;
      let existingUser = await findExistingUser_usecase(dependencies).execute(
        userCredentials?.email
      );
      if (existingUser)
        return res
          .status(409)
          .json({ success: false, message: "email is already taken" });
    } catch (error) {
      return res.json({ success: false, message: "something went wrong" });
    }
    try {
      // after all checkup, to create new user;
      const saltRounds: number = Number(process.env.SALT_ROUNDS) || 10;
      const salt: string = await bcrypt.genSalt(saltRounds);
      let hashedPassword: string = await bcrypt.hash(
        userCredentials.password,
        salt
      );
      userCredentials.password = hashedPassword;
      let newUser = await register_usecase(dependencies).execute(
        userCredentials
      );
      if (!newUser) throw new Error("something went wrong");

      res.status(201).json({ success: true, newUser });
    } catch (error) {
      console.log(`here is error`, error);
      res.status(400).json({ success: false, error });
    }
  };

  return registerUser;
};
