import MemberModel from "../schema/Member.model";
import {
  LoginInput,
  Member,
  MemberInput,
} from "../controllers/libs/types/member";
import Errors, { HttpCode, Message } from "../controllers/libs/Error";
import { MemberType } from "../controllers/libs/enums/member.enum";

class MemberService {
  private readonly memberModel = MemberModel;

  constructor() {}

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTARAUNT })
      .exec();
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = ""; // parolni natijadan olib tashlash
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  public async processlogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNIck: input.memberNIck },
        { memberNick: 1, MemberPassword: 1 }
      )
      .exec();
    if (!member) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    }
    const isMatch = member.memberPassword === input.memberPassword; // parolni tekshirish
    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModel.findById(member._id).exec();
  }
}

export default MemberService;
