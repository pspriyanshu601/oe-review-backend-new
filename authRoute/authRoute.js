import express  from "express";
import registerController from "../authController/register.js";
import loginController from "../authController/login.js";
import verifyController from "../authController/verify.js";
import logoutRouteController from "../authController/logout.js";

const authRouter = express.Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.get("/verify", verifyController);
authRouter.get("/logout",logoutRouteController);

export default authRouter 