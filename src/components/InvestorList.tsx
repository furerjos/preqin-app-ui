import React from "react";

const InvestorList: React.FC<{
  investors: Investor[];
  onSelect: (id: number) => void;
}> = ({ investors, onSelect }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Country</th>
          <th>Total Commitments (GBP)</th> {/* New column */}
        </tr>
      </thead>
      <tbody>
        {investors.map((investor) => (
          <tr
            key={investor.id}
            onClick={() => onSelect(investor.id)}
            className="cursor-pointer hover:bg-blue-100"
          >
            <td>{investor.name}</td>
            <td>{investor.type}</td>
            <td>{investor.country}</td>
            <td>£{investor.total_commitments.toLocaleString()}</td> {/* Format as GBP */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestorList;
