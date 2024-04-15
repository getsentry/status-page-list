import { StatusPageInfo } from "../types";

export const name = "GitHub";

export const statusPageUrl = "https://www.githubstatus.com";

export const domains = [
  "github.com",
  "*.github.com",
  "github.io",
  "*.github.io",
];

export const isServiceDefunct = false;

export const githubStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
