import { T } from "./libs/types/common";
import { Request, Response } from "express";
const memberController: T = {};
import MemberServise from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "./libs/types/member";
import Errors from "./libs/Error";

const memberServise = new MemberServise();
//spa
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,
      result: Member = await memberServise.signup(input); //Member

    res.json({ member: result });
  } catch (err) {
    console.error("Error in signup:", err);
    if (err instanceof Errors) {
      res.status(err.code).send(err.message);
    } else {
      res.status(Errors.standard.code).json(Errors.standard.message);
    }
  }
};
memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
      result = await memberServise.login(input); //Member

    res.json({ member: result });
  } catch (err) {
    console.log("Error in goHome:", err);
    if (err instanceof Errors) {
      res.status(err.code).send(err.message);
    } else {
      res.status(Errors.standard.code).json(Errors.standard.message);
    }
  }
};

export default memberController;
