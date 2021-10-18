import express from "express";
import AuthController from "src/controller/auth.controller";

const router = express.Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

export default router;
