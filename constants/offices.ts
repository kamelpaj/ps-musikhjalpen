const MH_BASE_URL = "https://musikhjalpen-franceska.herokuapp.com/server/fundraisers";
const GBG_ID = "5gRIpHSg1jCUTBy4jTWs5b";
const MALMO_ID = "5gRIpHSg1jCUTBy4jTWs5b";
const STHLM_ID = "5gRIpHSg1jCUTBy4jTWs5b";

export const GBG = {
  name: "Göteborg",
  image: "gbg.webp",
  qr: "gbg_qr.png",
  MH_PAGE_URL: "https://bossan.musikhjalpen.se/jaemtland-skramlar",
  TOTAL_URL: `${MH_BASE_URL}/${GBG_ID}?fields[]=amount`,
  DONOS_URL: `${MH_BASE_URL}/donations/${GBG_ID}`,
  NUM_OF_DONOS_URL: `${MH_BASE_URL}/donations/${GBG_ID}/number-of-donations`,
};

export const MALMO = {
  name: "Malmö",
  image: "malmo.jpeg",
  qr: "malmo_qr.png",
  MH_PAGE_URL: "https://bossan.musikhjalpen.se/jaemtland-skramlar",
  TOTAL_URL: `${MH_BASE_URL}/${MALMO_ID}?fields[]=amount`,
  DONOS_URL: `${MH_BASE_URL}/donations/${MALMO_ID}`,
  NUM_OF_DONOS_URL: `${MH_BASE_URL}/donations/${MALMO_ID}/number-of-donations`,
};

export const STHLM = {
  name: "Stockholm",
  image: "sthlm.webp",
  qr: "sthlm_qr.png",
  MH_PAGE_URL: "https://bossan.musikhjalpen.se/jaemtland-skramlar",
  TOTAL_URL: `${MH_BASE_URL}/${STHLM_ID}?fields[]=amount`,
  DONOS_URL: `${MH_BASE_URL}/donations/${STHLM_ID}`,
  NUM_OF_DONOS_URL: `${MH_BASE_URL}/donations/${STHLM_ID}/number-of-donations`,
};
