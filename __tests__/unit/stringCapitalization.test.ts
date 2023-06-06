import { expect, test } from "@jest/globals";
import { CapitalizeString } from "../../src/utils/DatasValidation/CapitalizeString";

describe("Capitalization string tests, ", () => {
  test("should return the same value", () => {
    const name = "Max";
    const result = CapitalizeString.capitalize(name);
    expect(result).toBe(name);
  });

  test("should return name with first char being upper case", () => {
    const name = "max";
    const result = CapitalizeString.capitalize(name);
    expect(result).toBe("Max");
  });
});
