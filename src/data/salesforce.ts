import { StatusPageInfo } from "../types";

export const name = "Salesforce";

export const statusPageUrl = "https://status.salesforce.com/";

export const domains = ["salesforce.com", "*.salesforce.com"];

export const isServiceDefunct = false;

export const salesforceStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
