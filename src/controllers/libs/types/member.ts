import { MemberType, MemberStatus } from "./../enums/member.enum";
export interface MemberInput {
  MemberType: MemberType;
  MemberStatus: MemberStatus;
  memberNIck: string;
  memberPhone: number;
  memberPassword: string;
  memberAdress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoint?: number;
}
