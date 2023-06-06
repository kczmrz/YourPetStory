export abstract class LoginAndPasswordValidation {
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

  static validateLogin(login: string): boolean {
    const isLengthValid: boolean = login.length > 5;
    const containsUppercase: boolean = this.containsUppercaseLetter(login);
    const containsLowercase: boolean = this.containsLowercaseLetter(login);

    return isLengthValid && containsUppercase && containsLowercase;
  }

  static validatePassword(password: string): boolean {
    const isLengthValid: boolean = password.length > 5;
    const containsUppercase: boolean = this.containsUppercaseLetter(password);
    const containsLowercase: boolean = this.containsLowercaseLetter(password);
    const containsSpecialCharacter: boolean =
      this.containsAnySpecialCharacter(password);

    return (
      isLengthValid &&
      containsUppercase &&
      containsLowercase &&
      containsSpecialCharacter
    );
  }
}
