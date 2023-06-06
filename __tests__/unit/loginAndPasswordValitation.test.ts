import { expect, test } from "@jest/globals";
import { LoginAndPasswordValidation } from "../../src/utils/DatasValidation/LoginAndPasswordValidation";

describe("Login validation, ", () => {
  test("should return false when login length is short than 5", () => {
    const exampleLogin = "test";

    expect(LoginAndPasswordValidation.validateLogin(exampleLogin)).toBe(false);
  });

  test("should return false when login doesn't contain special character", () => {
    const exampleLogin = "testing";

    expect(LoginAndPasswordValidation.validateLogin(exampleLogin)).toBe(false);
  });

  test("should return false when login doesn't contain upper case character", () => {
    const exampleLogin = "testing!";

    expect(LoginAndPasswordValidation.validateLogin(exampleLogin)).toBe(false);
  });

  test("should return false when login doesn't contain lower case character", () => {
    const exampleLogin = "TESTING!";

    expect(LoginAndPasswordValidation.validateLogin(exampleLogin)).toBe(false);
  });

  test("should return true when login matches requirements", () => {
    const exampleLogin = "Testing!";

    expect(LoginAndPasswordValidation.validateLogin(exampleLogin)).toBe(true);
  });
});

describe("Password validation, ", () => {
  test("should return false when password does not contain the special character", () => {
    const password = "Test123";
    const result = LoginAndPasswordValidation.validatePassword(password);

    expect(result).toBe(false);
  });

  test("should return true when passward is matching all requirements", () => {
    const password = "Test12@";
    const result = LoginAndPasswordValidation.validatePassword(password);
    expect(result).toBe(true);
  });
});
