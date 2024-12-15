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
  total_commitments: number;
  commitments: Commitment[];
}

interface InvestorDetailsProps {
  id: number;
  name: string;
  type: string;
  country: string;
  date_added: string;
  last_updated: string;
  total_commitments: number;
  commitments: Commitment[];
  assetClassFilter: string;
  setAssetClassFilter: (assetClass: string) => void;
}