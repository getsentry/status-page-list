import { StatusPageInfo } from "../types";

export const name = "Paubox";

export const statusPageUrl = "https://status.paubox.com/";

export const domains = [
  "paubox.net",
  "*.paubox.net",
  "paubox.com",
  "*.paubox.com",
];

export const isServiceDefunct = false;

export const pauboxStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
