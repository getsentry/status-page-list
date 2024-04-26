import { StatusPageInfo } from "../types";

export const name = "Zendesk";

export const statusPageUrl = "https://status.zendesk.com/";

export const domains = [
  "zendesk.com",
  "*.zendesk.com",
  "zdassets.com",
  "*.zdassets.com",
];

export const isServiceDefunct = false;

export const zendeskStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
