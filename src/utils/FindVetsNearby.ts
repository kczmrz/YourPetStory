import VetResult from "@/types/VetResult";

async function FindVetsNearby(city: string): Promise<VetResult[]> {
  const url = `api/vets/find?keyword=${city.toLowerCase()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch endpoint");
  }

  const data: VetResult[] = await response.json();

  return data;
}

export default FindVetsNearby;
