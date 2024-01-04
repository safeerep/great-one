import express from "express";
import { adminControllers } from "../../handlers/controllers";

export = (dependencies: any) => {
  const router = express.Router();

  const { 
    adminLoginController,
    adminAuthCheckController,
    adminLogoutController
  } = adminControllers(dependencies);

  router.post("/signin", adminLoginController);
  router.get("/check-auth", adminAuthCheckController);
  router.get("/logout", adminLogoutController);
  return router;
};
