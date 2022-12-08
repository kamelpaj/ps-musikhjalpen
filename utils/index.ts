import { Donation } from "../types";

export const findTopD = (donators: Donation[]) => {
  if (!donators.length) return null;
  return donators.reduce((prev, curr) => {
    return prev.amount > curr.amount ? prev : curr;
  });
};
