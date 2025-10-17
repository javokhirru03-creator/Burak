import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../controllers/libs/types/member";
import Errors, { HttpCode, Message } from "../controllers/libs/Error";
import { MemberType } from "../controllers/libs/enums/member.enum";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  // ...existing code...
  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTARAUNT })
      .exec();
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    try {
      const result = await this.memberModel.create(input);
      const dto = result.toObject() as Member;
      dto.memberPassword = "";
      return dto;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  // ...existing code...
}

export default MemberService;
