import { StatusPageInfo } from "../types";

export const name = "Repetiti";

export const statusPageUrl = "https://status.repetiti.com/";

export const domains = ["repetiti.com", "*.repetiti.com"];

export const isOperational = true;

export const repetitiStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
