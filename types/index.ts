export type TotalResponse = {
  amount: number;
  prev_amount: number;
};

export type Donation = {
  amount: number;
  hidden_amount: boolean;
  public: boolean;
  name: string;
  message: string;
  timestamp: string;
};

export type DonatorsResponse = Array<Donation>;

export type OfficeData = {
  name: string;
  image: string;
  donoUrl: string;
  qr: string;
  totalAmount: number;
  topD: Donation | null;
  allDonos: Donation[];
};
