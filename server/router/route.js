import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from "../controllers/appController.js";

/** POST Methods */
router.route("/register").post(controller.register); // register user
router.route("/login").post(controller.login); // login in app

export default router;
