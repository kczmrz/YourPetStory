export default abstract class GetCountriesNames {
  static async get(): Promise<any[]> {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Błąd sieciowy");
      }
      const data = await response.json();
      return data.map((country: any) => {
        return country.name.common;
      }) as string[];
    } catch (error) {
      return [];
    }
  }
}
