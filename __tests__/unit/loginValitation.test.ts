import { expect, test } from "@jest/globals";
import { LoginValidation } from "../../src/utils/DatasValidation/LoginValidation";

describe("Login validation,", () => {
  test("should return false when login length is short than 5", () => {
    const exampleLogin = "test";

    expect(LoginValidation.validate(exampleLogin)).toBe(false);
  });

  test("should return false when login doesn't contain special character", () => {
    const exampleLogin = "testing";

    expect(LoginValidation.validate(exampleLogin)).toBe(false);
  });

  test("should return false when login doesn't contain upper case character", () => {
    const exampleLogin = "testing!";

    expect(LoginValidation.validate(exampleLogin)).toBe(false);
  });

  test("should return false when login doesn't contain lower case character", () => {
    const exampleLogin = "TESTING!";

    expect(LoginValidation.validate(exampleLogin)).toBe(false);
  });

  test("should return true when login matches requirements", () => {
    const exampleLogin = "Testing!";

    expect(LoginValidation.validate(exampleLogin)).toBe(true);
  });
});
