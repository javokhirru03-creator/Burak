import { Request, Response } from "express";
import { T } from "../controllers/libs/types/common";

import {} from "../models/Member.service";
const restarauntController: T = {};

restarauntController.goHome = (req: Request, res: Response) => {
  try {
    res.send("home page");
  } catch (error) {
    console.error("Error in goHome:", error);
  }
};
restarauntController.getlogin = (req: Request, res: Response) => {
  try {
    res.send("login page");
  } catch (error) {
    console.error("Error in goHome:", error);
  }
};

restarauntController.getsingnup = (req: Request, res: Response) => {
  try {
    res.send("singnup page");
  } catch (error) {
    console.error("Error in goHome:", error);
  }
};

restarauntController.processlogin = (req: Request, res: Response) => {
  try {
    res.send("done");
  } catch (error) {
    console.error("Error in goHome:", error);
  }
};
restarauntController.processingnup = (req: Request, res: Response) => {
  try {
    res.send("done");
  } catch (error) {
    console.error("Error in goHome:", error);
  }
};

export default restarauntController;
