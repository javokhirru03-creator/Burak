import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
//member routes
router.get("/login", memberController.login);

router.get("/singnup", memberController.singnup);

export default router;
