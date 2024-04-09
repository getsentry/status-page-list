import { StatusPageInfo } from "../types";

export const name = "Reddit";

export const statusPageUrl = "https://www.redditstatus.com/";

export const domains = ["reddit.com"];

export const isOperational = true;

export const redditStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
