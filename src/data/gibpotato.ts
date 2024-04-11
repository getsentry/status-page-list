import { StatusPageInfo } from "../types";

export const name = "GibPotato";

export const statusPageUrl = "https://status.gibpotato.app/";

export const domains = ["gibpotato.app", "*.gibpotato.app"];

export const isOperational = true;

export const gibpotatoStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
