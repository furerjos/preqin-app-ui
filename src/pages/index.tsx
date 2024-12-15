import { useEffect, useState } from "react";
import InvestorList from "../components/InvestorList";
import { fetchInvestors } from "../utils/api";

const HomePage = () => {
  const [investors, setInvestors] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInvestors()
      .then(setInvestors)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

  if (!investors.length) return <div className="text-center">Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Investors</h2>
      <InvestorList investors={investors} onSelect={(id) => (window.location.href = `/investors/${id}`)} />
    </div>
  );
};

export default HomePage;
