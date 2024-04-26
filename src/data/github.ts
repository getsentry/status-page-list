import { StatusPageInfo } from "../types";

export const name = "GitHub";

export const statusPageUrl = "https://www.githubstatus.com";

export const domains = [
  "github.com",
  "*.github.com",
  "github.io",
  "*.github.io",
  "githubusercontent.com",
  "raw.githubusercontent.com",
  "*.githubusercontent.com",
  "actions.githubusercontent.com",
  "*.actions.githubusercontent.com",
];

export const isServiceDefunct = false;

export const githubStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
