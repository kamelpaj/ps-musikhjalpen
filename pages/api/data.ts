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
  topD: Donation | null;
  offices: OfficeData[];
};

export const config = {
  regions: ["arn1"],
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

  // Fetch number of donations
  const gbgNumOfDonos: number = await (
    await fetch(GBG.NUM_OF_DONOS_URL)
  ).json();
  const malmoNumOfDonos: number = await (
    await fetch(MALMO.NUM_OF_DONOS_URL)
  ).json();
  const sthlmNumOfDonos: number = await (
    await fetch(STHLM.NUM_OF_DONOS_URL)
  ).json();

  // console.log(gbgNumOfDonos, malmoNumOfDonos, sthlmNumOfDonos);

  // Fetch donator lists from Musikhjälpen
  const gbgDonos = <DonatorsResponse>(
    await (await fetch(`${GBG.DONOS_URL}/0`)).json()
  );
  const malmoDonos = <DonatorsResponse>(
    await (await fetch(`${MALMO.DONOS_URL}/0`)).json()
  );
  const sthlmDonos = <DonatorsResponse>(
    await (await fetch(`${STHLM.DONOS_URL}/0`)).json()
  );

  const allLatestDonos = [...gbgDonos, ...malmoDonos, ...sthlmDonos];

  const data: Data = {
    totalAmount:
      gbgTotalResp.amount + malmoTotalResp.amount + sthlmTotalResp.amount,
    topD: findTopD([...gbgDonos, ...malmoDonos, ...sthlmDonos]),
    offices: [
      {
        name: GBG.name,
        image: GBG.image,
        totalAmount: gbgTotalResp.amount,
        topD: findTopD(gbgDonos),
        allDonos: gbgDonos,
      },
      {
        name: MALMO.name,
        image: MALMO.image,
        totalAmount: malmoTotalResp.amount,
        topD: findTopD(malmoDonos),
        allDonos: malmoDonos,
      },
      {
        name: STHLM.name,
        image: STHLM.image,
        totalAmount: sthlmTotalResp.amount,
        topD: findTopD(sthlmDonos),
        allDonos: sthlmDonos,
      },
    ],
  };

  res.status(200).json(data);
}
