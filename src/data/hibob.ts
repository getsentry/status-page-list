import { StatusPageInfo } from "../types";

export const name = "HiBob";

export const statusPageUrl = "https://status.hibob.io/";

export const domains = ["hibob.io", "*.hibob.io"];

export const isOperational = true;

export const hiBobStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
