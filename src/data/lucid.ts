import { StatusPageInfo } from "../types";

export const name = "Lucid";

export const statusPageUrl = "https://status.lucid.co/";

export const domains = ["lucid.co", "*.lucid.co"];

export const isOperational = true;

export const lucidStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
