import { StatusPageInfo } from "../types";

export const name = "Gitlab";

export const statusPageUrl = "https://status.gitlab.com/";

export const domains = ["gitlab.com", "*.gitlab.com"];

export const isServiceDefunct = false;

export const gitlabStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
