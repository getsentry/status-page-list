import { StatusPageInfo } from "../types";

export const name = "DigitalyOcean";

export const statusPageUrl = "https://status.digitalocean.com/";

export const domains = ["digitalocean.com", "*.digitalocean.com"];

export const isServiceDefunct = false;

export const digitalOceanStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
