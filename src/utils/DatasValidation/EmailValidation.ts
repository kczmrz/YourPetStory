export abstract class EmailValidation {
  private static emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  static validate(email: string): boolean {
    if (email.length > 11) {
      return this.emailRegex.test(email) ? true : false;
    } else {
      return false;
    }
  }
}
