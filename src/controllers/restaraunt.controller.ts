import { MemberType } from "./libs/enums/member.enum";
import { Request, Response } from "express";
import { T } from "../controllers/libs/types/common";
import MemberServise from "../models/Member.service";
import {} from "../models/Member.service";
import { MemberInput } from "../controllers/libs/types/member";
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

restarauntController.getsignup = (req: Request, res: Response) => {
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
restarauntController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newMember: MemberInput = req.body;
    newMember.MemberType = MemberType.RESTARAUNT;

    const memberServise = new MemberServise();
    const result = await memberServise.processSignup(newMember);

    res.send(result);
  } catch (error) {
    console.error("Error in goHome:", error);
    res.send(error);
  }
};

export default restarauntController;
