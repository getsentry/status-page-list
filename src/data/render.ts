import { StatusPageInfo } from "../types";

export const name = "Render";

export const statusPageUrl = "https://status.render.com/";

export const domains = ["render.com", "*.render.com"];

export const isServiceDefunct = false;

export const renderStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
