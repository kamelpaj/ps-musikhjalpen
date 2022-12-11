const MH_BASE_URL = "https://bossan.musikhjalpen.se/server/fundraisers";
const GBG_ID = "5J8GD3ASiYy7qrKV85DzSA";
const MALMO_ID = "5hhWgafXRS5d7M1OptWB7E";
const STHLM_ID = "7twg5rmk1nZnnIZBJVeO6B";

export const GBG = {
  name: "Göteborg",
  image: "gbg.webp",
  qr: "gbg_qr.png",
  MH_PAGE_URL: "https://bossan.musikhjalpen.se/publicis-sapient-gothenburg-office",
  TOTAL_URL: `${MH_BASE_URL}/${GBG_ID}?fields[]=amount`,
  DONOS_URL: `${MH_BASE_URL}/donations/${GBG_ID}`,
  NUM_OF_DONOS_URL: `${MH_BASE_URL}/donations/${GBG_ID}/number-of-donations`,
};

export const MALMO = {
  name: "Malmö",
  image: "malmo.jpeg",
  qr: "malmo_qr.png",
  MH_PAGE_URL: "https://bossan.musikhjalpen.se/publicis-sapient-malmoe-office",
  TOTAL_URL: `${MH_BASE_URL}/${MALMO_ID}?fields[]=amount`,
  DONOS_URL: `${MH_BASE_URL}/donations/${MALMO_ID}`,
  NUM_OF_DONOS_URL: `${MH_BASE_URL}/donations/${MALMO_ID}/number-of-donations`,
};

export const STHLM = {
  name: "Stockholm",
  image: "sthlm.webp",
  qr: "sthlm_qr.png",
  MH_PAGE_URL: "https://bossan.musikhjalpen.se/publicis-sapient-stockholm-office",
  TOTAL_URL: `${MH_BASE_URL}/${STHLM_ID}?fields[]=amount`,
  DONOS_URL: `${MH_BASE_URL}/donations/${STHLM_ID}`,
  NUM_OF_DONOS_URL: `${MH_BASE_URL}/donations/${STHLM_ID}/number-of-donations`,
};
