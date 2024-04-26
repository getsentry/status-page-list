import { StatusPageInfo } from "../types";

export const name = "Incident.io";

export const statusPageUrl = "https://status.incident.io/";

export const domains = ["incident.io", "*.incident.io"];

export const isServiceDefunct = false;

export const incidentIoStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
