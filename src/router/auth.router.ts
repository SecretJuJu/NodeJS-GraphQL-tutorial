import express from "express";
import AuthController from "controller/auth.controller";
import wrapAsync from "utils/wrap-async";

const router = express.Router();

router.post("/login", wrapAsync(AuthController.login));
router.post("/register", wrapAsync(AuthController.register));

export default router;
