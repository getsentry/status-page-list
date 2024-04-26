import { StatusPageInfo } from "../types";

export const name = "AirGateway";

export const statusPageUrl = "https://status.airgateway.com/";

export const domains = ["airgateway.com", "*.airgateway.com"];

export const isServiceDefunct = false;

export const airGatewayStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
