import express from "express";
const routerAdmin = express.Router();
import restarauntController from "./controllers/restaraunt.controller";

//restaraunt routes
routerAdmin.get("/", restarauntController.goHome);

routerAdmin
  .get("/login", restarauntController.getlogin)
  .post("/login", restarauntController.processlogin);

routerAdmin
  .get("/signup", restarauntController.getsignup)
  .post("/signup", restarauntController.processSignup);

routerAdmin.get("/check-me", restarauntController.checkAuthSession);

export default routerAdmin;

//product routes
//user routes
