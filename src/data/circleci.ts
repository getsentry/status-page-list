import { StatusPageInfo } from "../types";

export const name = "CircleCI";

export const statusPageUrl = "https://status.circleci.com/";

export const domains = ["circleci.com", "*.circleci.com"];

export const isServiceDefunct = false;

export const circleCiStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
