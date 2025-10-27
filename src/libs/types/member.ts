import {ObjectId} from "mongoose"
import { Session } from "express-session";
import { MemberStatus, MemberType } from "../enums/member.enum";
import { Request } from "express";

export interface Member {
    _id: ObjectId;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone:  string;
    memberPassword?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPonts: number;
    createdAt: Date;
    updatedAt: Date;
   }


export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone:  string;
    memberPassword: string;
    memberDesc?: string;
    memberImage?: string;
    memberPonts?: number;
   }

   export interface LoginInput{
    memberNick: string;
    memberPassword: string;

   }

  export interface AdminRequest extends Request {
    member: Member,
    session: Session & { member: Member};
   }