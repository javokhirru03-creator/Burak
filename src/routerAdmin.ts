import express from "express";
const routerAdmin = express.Router();
import restarauntController from "./controllers/restaraunt.controller";

routerAdmin.get("/", restarauntController.goHome);

routerAdmin.get("/login", restarauntController.getlogin);

routerAdmin.get("/singnup", restarauntController.getsingnup);

export default routerAdmin;
