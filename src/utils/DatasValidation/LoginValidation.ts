export abstract class LoginValidation {
  private static specialSigns: string[] = ["_", "-", "!", "@", "?"];

  private static containsAnySpecialCharacter(inputLogin: string): boolean {
    return this.specialSigns.some((char) => inputLogin.includes(char));
  }

  private static containsUppercaseLetter(login: string): boolean {
    return Array.from(login).some((char) => char !== char.toLowerCase());
  }

  private static containsLowercaseLetter(login: string): boolean {
    return Array.from(login).some((char) => char !== char.toUpperCase());
  }

  static validate(login: string): boolean {
    const isLengthValid: boolean = login.length > 5;
    const containsSpecialChar: boolean =
      this.containsAnySpecialCharacter(login);
    const containsUppercase: boolean = this.containsUppercaseLetter(login);
    const containsLowercase: boolean = this.containsLowercaseLetter(login);

    return (
      isLengthValid &&
      containsSpecialChar &&
      containsUppercase &&
      containsLowercase
    );
  }
}
