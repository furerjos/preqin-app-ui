import React from "react";

const InvestorDetails: React.FC<InvestorDetailsProps> = ({
  name,
  type,
  country,
  date_added,
  last_updated,
  total_commitments,
  commitments,
  assetClassFilter,
  setAssetClassFilter,
}) => {
  // Filter commitments by selected asset class
  const filteredCommitments = assetClassFilter
    ? commitments.filter((c) => c.asset_class === assetClassFilter)
    : commitments;

  return (
    <div>
      {/* Investor Details */}
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>
          <strong>Type:</strong> {type}
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>Date Added:</strong> {new Date(date_added).toLocaleDateString()}
        </p>
        <p>
          <strong>Last Updated:</strong> {new Date(last_updated).toLocaleDateString()}
        </p>
        <p>
          <strong>Total Commitments (GBP):</strong> £{total_commitments.toLocaleString()}
        </p>
      </div>

      {/* Asset Class Filter */}
      <div className="p-4 border-b border-gray-300">
        <label htmlFor="assetClass" className="block text-sm font-medium text-gray-700">
          Filter by Asset Class:
        </label>
        <select
          id="assetClass"
          value={assetClassFilter}
          onChange={(e) => setAssetClassFilter(e.target.value)}
          className="mt-1 inline-block w-auto pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">All</option>
          {/* new Set -> Creates set and removes duplicates */}
          {/* [...new Set()] converts the Set into an array to use .map for rendering options in dropdown */}
          {[...new Set(commitments.map((c) => c.asset_class))].map((assetClass) => (
            <option key={assetClass} value={assetClass}>
              {assetClass}
            </option>
          ))}
        </select>
      </div>

       {/* Commitments Table */}
       <div className="p-4">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Asset Class</th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">Currency</th>
            </tr>
          </thead>
          <tbody>
            {filteredCommitments.map((c, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{c.asset_class}</td>
                <td className="border border-gray-300 px-4 py-2">£{c.amount.toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">{c.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestorDetails;
