import { StatusPageInfo } from "../types";

export const name = "Linode";

export const statusPageUrl = "https://status.linode.com/";

export const domains = ["linode.com", "*.linode.com"];

export const isServiceDefunct = false;

export const linodeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
