import type { NextApiRequest, NextApiResponse } from "next";
import { GBG, MALMO, STHLM } from "../../constants/offices";
import {
  Donation,
  DonatorsResponse,
  OfficeData,
  TotalResponse,
} from "../../types";
import { findTopD } from "../../utils";

export type Data = {
  totalAmount: number;
  topD: Donation;
  offices: OfficeData[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Fetch total amounts from Musikhjälpen
  const gbgTotalResp = <TotalResponse>await (await fetch(GBG.TOTAL_URL)).json();
  const malmoTotalResp = <TotalResponse>(
    await (await fetch(MALMO.TOTAL_URL)).json()
  );
  const sthlmTotalResp = <TotalResponse>(
    await (await fetch(STHLM.TOTAL_URL)).json()
  );

  // Fetch donator lists from Musikhjälpen
  const gbgDonos = <DonatorsResponse>await (await fetch(GBG.DONOS_URL)).json();
  const malmoDonos = <DonatorsResponse>(
    await (await fetch(MALMO.DONOS_URL)).json()
  );
  const sthlmDonos = <DonatorsResponse>(
    await (await fetch(STHLM.DONOS_URL)).json()
  );

  const data: Data = {
    totalAmount:
      gbgTotalResp.amount + malmoTotalResp.amount + sthlmTotalResp.amount,
    topD: findTopD([...gbgDonos, ...malmoDonos, ...sthlmDonos]),
    offices: [
      {
        name: GBG.name,
        totalAmount: gbgTotalResp.amount,
        topD: findTopD(gbgDonos),
        allDonos: gbgDonos,
      },
      {
        name: MALMO.name,
        totalAmount: malmoTotalResp.amount,
        topD: findTopD(malmoDonos),
        allDonos: malmoDonos,
      },
      {
        name: STHLM.name,
        totalAmount: sthlmTotalResp.amount,
        topD: findTopD(sthlmDonos),
        allDonos: sthlmDonos,
      },
    ],
  };

  res.status(200).json(data);
}
