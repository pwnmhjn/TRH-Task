import express from "express";
const router = express.Router();
import wrapAsync from "../utils/WrapAsync.js";
import { logUser,logoutUser,registerUser } from "../controllers/users.controller.js";


router.post("/register", wrapAsync(registerUser) );


router.post("/login",wrapAsync(logUser) );

router.get("/logout",logoutUser )

export default router;