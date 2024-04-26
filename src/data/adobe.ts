import { StatusPageInfo } from "../types";

export const name = "Adobe";

export const statusPageUrl = "https://status.adobe.com/";

export const domains = [
  "adobe.com",
  "*.adobe.com",
  "adobe.io",
  "*.adobe.io",
  "adobecc.com",
  "*.adobecc.com",
  "adobe-identity.com",
  "*.adobe-identity.com",
];

export const isServiceDefunct = false;

export const adobeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
