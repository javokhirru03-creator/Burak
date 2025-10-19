import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../controllers/libs/types/member";
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
}

export default MemberService;
