import { StatusPageInfo } from "../types";

export const name = "Adobe";

export const statusPageUrl = "https://status.adobe.com/";

export const domains = ["adobe.com", "*.adobe.com"];

export const isOperational = true;

export const adobeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
