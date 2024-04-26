import { StatusPageInfo } from "../types";

export const name = "Fly.io";

export const statusPageUrl = "https://status.flyio.net/";

export const domains = ["fly.io", "*.fly.io"];

export const isServiceDefunct = false;

export const flyIoStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
