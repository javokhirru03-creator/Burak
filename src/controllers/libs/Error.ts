export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  GENERIC_ERROR = "Something went wrong. Please try again later.",
  NOT_FOUND = "The requested resource was not found.",
  CREATE_FAILED = "Failed to create the resource.",
  UPDATE_FAILED = "Failed to update the resource.",
  DELETE_FAILED = "Failed to delete the resource.",
  LOGIN_FAILED = "Invalid nickname or password.",
  NO_MEMBER_NICK = "Member nickname is required.",
  USED_NICK_PHONE = "This phone number is already in use.",
  WRONG_PASSWORD = "The password provided is incorrect!.",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  static standard = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: Message.GENERIC_ERROR,
  };
  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
