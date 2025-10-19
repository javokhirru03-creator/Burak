import { ObjectId } from "mongoose";
import { MemberType, MemberStatus } from "./../enums/member.enum";

export interface Member {
  _id: ObjectId;
  MemberType: MemberType;
  MemberStatus: MemberStatus;
  memberNIck: string;
  memberPhone: number;
  memberPassword?: string;
  memberAdress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface MemberInput {
  MemberType?: MemberType;
  MemberStatus?: MemberStatus;
  memberNIck: string;
  memberPhone: number;
  memberPassword: string;
  memberAdress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
}

export interface LoginInput {
  memberNIck: string;
  memberPassword: string;
}
