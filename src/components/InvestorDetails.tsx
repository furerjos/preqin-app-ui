import React from "react";

interface Commitment {
  asset_class: string;
  amount: number;
  currency: string;
}

interface InvestorDetailsProps {
  id: number;
  name: string;
  type: string;
  country: string;
  date_added: string;
  last_updated: string;
  commitments: Commitment[];
  assetClassFilter: string;
  setAssetClassFilter: (assetClass: string) => void;
}

const InvestorDetails: React.FC<InvestorDetailsProps> = ({
  name,
  type,
  country,
  date_added,
  last_updated,
  commitments,
  assetClassFilter,
  setAssetClassFilter,
}) => {
  // Filter commitments by selected asset class
  const filteredCommitments = assetClassFilter
    ? commitments.filter((c) => c.asset_class === assetClassFilter)
    : commitments;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded p-6">
      {/* Investor Info */}
      <h2 className="text-3xl font-bold mb-4">{name}</h2>
      <p className="mb-2">
        <span className="font-bold">Type:</span> {type}
      </p>
      <p className="mb-2">
        <span className="font-bold">Country:</span> {country}
      </p>
      <p className="mb-2">
        <span className="font-bold">Date Added:</span> {date_added}
      </p>
      <p className="mb-4">
        <span className="font-bold">Last Updated:</span> {last_updated}
      </p>

      {/* Asset Class Filter */}
      <div className="mb-4 flex items-center space-x-4">
        <label htmlFor="assetClass" className="font-bold">
          Filter by Asset Class:
        </label>
        <select
          id="assetClass"
          value={assetClassFilter}
          onChange={(e) => setAssetClassFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All</option>
          {[...new Set(commitments.map((c) => c.asset_class))].map((assetClass) => (
            <option key={assetClass} value={assetClass}>
              {assetClass}
            </option>
          ))}
        </select>
      </div>

      {/* Commitments Table */}
      <h3 className="text-xl font-bold mb-4">Commitments</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Asset Class</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {filteredCommitments.map((c, index) => (
            <tr key={index}>
              <td>{c.asset_class}</td>
              <td>{c.amount.toLocaleString()}</td>
              <td>{c.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestorDetails;
