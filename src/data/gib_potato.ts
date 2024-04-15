import { StatusPageInfo } from "../types";

export const name = "GibPotato";

export const statusPageUrl = "https://status.gibpotato.app/";

export const domains = ["gibpotato.app", "*.gibpotato.app"];

export const isServiceDefunct = false;

export const gibPotatoStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
