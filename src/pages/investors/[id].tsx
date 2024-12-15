import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InvestorDetails from "../../components/InvestorDetails";
import { fetchInvestorDetails } from "../../utils/api";

// Define types for the investor data
interface Commitment {
  asset_class: string;
  amount: number;
  currency: string;
}

interface Investor {
  id: number;
  name: string;
  type: string;
  country: string;
  date_added: string;
  last_updated: string;
  commitments: Commitment[];
}

const InvestorPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [investor, setInvestor] = useState<Investor | null>(null); // Explicitly define the type
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [assetClassFilter, setAssetClassFilter] = useState<string>("");

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetchInvestorDetails(Number(id))
        .then((data) => {
          setInvestor(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div className="text-red-500">Error: {error}</div>;

  if (!investor) return <div>No data available</div>;

  return (
    <div>
      <InvestorDetails
        {...investor} // TypeScript now recognizes this as an object
        assetClassFilter={assetClassFilter}
        setAssetClassFilter={setAssetClassFilter}
      />
    </div>
  );
};

export default InvestorPage;
