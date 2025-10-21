import MemberModel from "../schema/Member.model";
import {
  LoginInput,
  Member,
  MemberInput,
} from "../controllers/libs/types/member";
import Errors, { HttpCode, Message } from "../controllers/libs/Error";
import { MemberType } from "../controllers/libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
class MemberService {
  private readonly memberModel = MemberModel;

  constructor() {}

  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt(); // salt yaratish
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt); // parolni hash qilish
    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = ""; // parolni natijadan olib tashlash
      return result.toJSON();
    } catch (err) {
      console.log("Error model singn up", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  public async login(input: LoginInput): Promise<Member> {
    // consider member status letter
    const member = await this.memberModel
      .findOne(
        { memberNIck: input.memberNIck }, // nickname bo'yicha qidirish
        { memberNick: 1, MemberPassword: 1 } // faqat kerakli maydonlarni olish
      )
      .exec();
    if (!member) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    }
    //const isMatch = member.memberPassword === input.memberPassword; // parolni tekshirish
    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    ); // parolni tekshirish
    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    } // agar parol to'g'ri bo'lsa, member ma'lumotlarini qaytarish

    return await this.memberModel.findById(member._id).lean().exec(); // to'liq member ma'lumotlarini olish
  }

  //TODO: SSR______________________________________________________________________________
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
        { memberNIck: input.memberNIck }, // nickname bo'yicha qidirish
        { memberNick: 1, MemberPassword: 1 } // faqat kerakli maydonlarni olish
      )
      .exec();
    if (!member) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    }
    const salt = await bcrypt.genSalt(); // salt yaratish
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt); // parolni hash qilish
    //const isMatch = member.memberPassword === input.memberPassword; // parolni tekshirish
    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    ); // parolni tekshirish
    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    } // agar parol to'g'ri bo'lsa, member ma'lumotlarini qaytarish

    return await this.memberModel.findById(member._id).exec(); // to'liq member ma'lumotlarini olish
  }
}

export default MemberService;
