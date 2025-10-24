import { MemberType } from "./libs/enums/member.enum";
import { Request, Response } from "express";
import { T } from "../controllers/libs/types/common";
import MemberServise from "../models/Member.service";
import {} from "../models/Member.service";
import { LoginInput, MemberInput } from "../controllers/libs/types/member";
const restarauntController: T = {};

restarauntController.goHome = (req: Request, res: Response) => {
  try {
    res.render("home");
  } catch (error) {
    console.error("Error in goHome:", error);
  }
};
restarauntController.getlogin = (req: Request, res: Response) => {
  try {
    res.render("login");
  } catch (error) {
    console.error("Error in goHome:", error);
  }
};

restarauntController.getsignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
  } catch (error) {
    console.error("Error in goHome:", error);
  }
};

restarauntController.processlogin = async (req: Request, res: Response) => {
  try {
    const input: LoginInput = req.body;
    console.log(input);

    const memberServise = new MemberServise();
    const result = await memberServise.processlogin(input);
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
