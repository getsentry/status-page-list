import { StatusPageInfo } from "../types";

export const name = "Linode";

export const statusPageUrl = "https://status.linode.com/";

export const domains = ["linode.com", "*.linode.com"];

export const isOperational = true;

export const linodeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
