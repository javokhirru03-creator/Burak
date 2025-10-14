import { T } from "../libs/types/common";
import { Request, Response } from "express";
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

export default restarauntController;
