import { StatusPageInfo } from "../types";

export const name = "Oracle Cloud";

export const statusPageUrl = "https://ocistatus.oraclecloud.com";

export const domains = ["oraclecloud.com", "*.oraclecloud.com"];

export const isServiceDefunct = false;

export const oracleCloudStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
