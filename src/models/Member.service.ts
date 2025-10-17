import MemberModel from "../schema/Member.model";
import { MemberInput } from "../controllers/libs/types/member";

class MemberServise {
  private readonly memberModel;
  constructor() {
    this.memberModel = MemberModel;
  }

  public async processSignup(input: MemberInput): Promise<void> {
    console.log("Processing signup...");
  }
}

export default MemberServise;
