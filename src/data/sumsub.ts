import { StatusPageInfo } from "../types";

export const name = "Sumsub";

export const statusPageUrl = "https://status.sumsub.com/";

export const domains = ["sumsub.com", "*.sumbsub.com"];

export const isOperational = true;

export const sumsubStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
