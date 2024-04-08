import { StatusPageInfo } from "../types";

export const name = "DigitalyOcean";

export const statusPageUrl = "https://status.digitalocean.com/";

export const domains = ["digitalocean.com", "*.digitalocean.com"];

export const isOperational = true;

export const digitalOceanStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
