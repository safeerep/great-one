import express, { Request, Response, response } from "express";
import { userControllers } from "../../handlers/controllers";
import passport from "passport";
import "../../utils/externalServices/googleAuth";
// googleStrategy;

export = (dependencies: any) => {
  const router = express.Router();
  const {
    sendOtpForSignupController,
    userSignupController,
    loginController,
    googleAuthSucceedController,
    googleAuthFailedController,
  } = userControllers(dependencies);

  router.use(passport.initialize());
  router.use(passport.session());
  router.get("/", (req: Request, res: Response) => {
    res.send("its from routes");
  });

  router.post("/send-otp-for-signup", sendOtpForSignupController);
  router.post("/signup", userSignupController);
  router.post("/signin", loginController);
  router.get(
    "/signin-with-google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  router.get(
    "/signin-with-google/redirect",
    passport.authenticate("google", {
      successRedirect: "/api/users/user/signin-success",
      failureRedirect: "/api/users/user/signin-failure",
    })
  );
  router.get("/signin-success", googleAuthSucceedController);
  router.get("/signin-failure", googleAuthFailedController);

  return router;
};
