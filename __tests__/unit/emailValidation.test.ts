import { expect, test } from "@jest/globals";
import { EmailValidation } from "../../src/utils/DatasValidation/EmailValidation";

describe("Email validation, ", () => {
  test("should return false when e-mail length is less or equal than 11", () => {
    const emailExample = "t@gmail.com";

    expect(EmailValidation.validate(emailExample)).toBe(false);
  });

  test("should return false when email doesn't match the regex expression (@ missing)", () => {
    const emailExample = "myemailgmail.com";

    expect(EmailValidation.validate(emailExample)).toBe(false);
  });

  test("should return false when email doesn't match the regex expession (. missing)", () => {
    const emailExample = "mywmail@gmailcom";

    expect(EmailValidation.validate(emailExample)).toBe(false);
  });

  test("should return true when email matches regex expression", () => {
    const emailExample = "myemail@gmail.com";

    expect(EmailValidation.validate(emailExample)).toBe(true);
  });
});
