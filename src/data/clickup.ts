import { StatusPageInfo } from "../types";

export const name = "ClickUp";

export const statusPageUrl = "https://status.clickup.com/";

export const domains = ["clickup.com", "*.clickup.com"];

export const isServiceDefunct = false;

export const clickUpStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
