import express from "express";
import UserController from "controller/user.controller";
import wrapAsync from "utils/wrap-async";

const router = express.Router();

router.get("/me", wrapAsync(UserController.getMe));

export default router;
