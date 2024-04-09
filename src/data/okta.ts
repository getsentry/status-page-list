import { StatusPageInfo } from "../types";

export const name = "Okta";

export const statusPageUrl = "https://status.okta.com/";

export const domains = ["okta.com", "*.okta.com"];

export const isOperational = true;

export const oktaStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
