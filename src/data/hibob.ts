import { StatusPageInfo } from "../types";

export const name = "HiBob";

export const statusPageUrl = "https://status.hibob.io/";

export const domains = ["hibob.io", "*.hibob.io"];

export const isServiceDefunct = false;

export const hiBobStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
