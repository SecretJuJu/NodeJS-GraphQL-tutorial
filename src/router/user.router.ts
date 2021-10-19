import express from "express";
import UserController from "controller/user.controller";
import wrapAsync from "utils/wrap-async";
import authMiddleware from "middleware/auth.middleware";

const router = express.Router();

router.get("/me", wrapAsync(authMiddleware));
router.get("/me", wrapAsync(UserController.getMe));

export default router;
