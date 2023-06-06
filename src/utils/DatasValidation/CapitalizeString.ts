export abstract class CapitalizeString {
  static capitalize(inputValue: string): string {
    if (inputValue.length === 0) {
      return "";
    } else {
      if (inputValue.charAt(0) === inputValue.charAt(0).toUpperCase()) {
        return inputValue;
      } else {
        return inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      }
    }
  }
}
