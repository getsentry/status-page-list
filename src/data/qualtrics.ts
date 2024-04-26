import { StatusPageInfo } from "../types";

export const name = "Qualtrics";

export const statusPageUrl = "https://status.qualtrics.com/";

export const domains = ["qualtrics.com", "*.qualtrics.com"];

export const isServiceDefunct = false;

export const qualtricsStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
