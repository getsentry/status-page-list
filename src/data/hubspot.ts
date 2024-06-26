import { StatusPageInfo } from "../types";

export const name = "HubSpot";

export const statusPageUrl = "https://status.hubspot.com/";

export const domains = ["hubspot.com", "*.hubspot.com"];

export const isServiceDefunct = false;

export const hubspotStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
