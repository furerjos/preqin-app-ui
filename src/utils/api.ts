const BASE_URL = "http://127.0.0.1:8000/api";

export const fetchInvestors = async () => {
    const response = await fetch(`${BASE_URL}/investors`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch investors");
    }
    return response.json();
  };
  
  export const fetchInvestorDetails = async (id: number, assetClass?: string) => {
    const url = assetClass
      ? `${BASE_URL}/investors/${id}?asset_class=${encodeURIComponent(assetClass)}`
      : `${BASE_URL}/investors/${id}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch investor details for ID ${id}`);
    }
    return response.json();
  };
  
