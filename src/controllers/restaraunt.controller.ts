import { MemberType } from "./libs/enums/member.enum";
import { Request, Response } from "express";
import { T } from "../controllers/libs/types/common";
import MemberServise from "../models/Member.service";
import {} from "../models/Member.service";
import {
  AdminRquest,
  LoginInput,
  MemberInput,
} from "../controllers/libs/types/member";
import { Message } from "../controllers/libs/Error";
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
    res.redirect("/admin");
  }
};

restarauntController.getsignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
  } catch (error) {
    console.error("Error in goHome:", error);
    res.redirect("/admin");
  }
};

restarauntController.processlogin = async (req: AdminRquest, res: Response) => {
  try {
    const input: LoginInput = req.body;
    console.log(input);
    const memberServise = new MemberServise();
    const result = await memberServise.processlogin(input);

    //session boshlash
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });

    res.send(result);
  } catch (error) {
    console.error("Error in goHome:", error);
    const message =
      error instanceof Error ? error.message : Message.GENERIC_ERROR;
    res.send(
      `<script> alert("${message}");window.location.replace('admin/login')</script>`
    );
  }
};
restarauntController.processSignup = async (
  req: AdminRquest,
  res: Response
) => {
  try {
    console.log(req.body);
    const newMember: MemberInput = req.body;
    newMember.MemberType = MemberType.RESTARAUNT;

    const memberServise = new MemberServise();
    const result = await memberServise.processSignup(newMember);

    //session boshlash
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });

    res.send(result);
  } catch (error) {
    console.error("Error in goHome:", error);
    const message =
      error instanceof Error ? error.message : Message.GENERIC_ERROR;
    res.send(
      `<script> alert("${message}");window.location.replace('admin/signup')</script>`
    ); //ejs da alert korsatish
  }
};
restarauntController.logout = async (req: AdminRquest, res: Response) => {
  try {
    console.log("logout");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (error) {
    console.error("Error in goHome:", error);
    res.redirect("/admin");
  }
};
restarauntController.checkAuthSession = async (
  req: AdminRquest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session.member)
      res.send(`<script> alert("${req.session.member.memberNIck}")</script>`);
    else res.send(`<script> alert("${Message.NO_AUTH_SESSION}")</script>`);
  } catch (error) {
    console.error("Error in goHome:", error);
    res.send(error);
  }
};

export default restarauntController;
