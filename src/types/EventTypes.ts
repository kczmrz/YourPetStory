import Vaccinations from "@/enums/Vaccinations";

type Groomer = {
  petName: string;
  date: Date;
  price: number;
  additionalNotes?: string;
};

type Vaccination = {
  petName: string;
  date: Date;
  vaccine: Vaccinations;
  additionalNotes?: string;
};

type VeterinaryCheckup = {
  petName: string;
  date: Date;
  isVaccinated: boolean;
  isHealthy: boolean;
  additionalNotes?: string;
};

export type EventTypes = Groomer | Vaccination | VeterinaryCheckup;
