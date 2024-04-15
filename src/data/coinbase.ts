import { StatusPageInfo } from "../types";

export const name = "Coinbase";

export const statusPageUrl = "https://status.coinbase.com/";

export const domains = ["coinbase.com", "*.coinbase.com"];

export const isServiceDefunct = false;

export const coinbaseStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
