import { StatusPageInfo } from "../types";

export const name = "Vercel";

export const statusPageUrl = "https://www.vercel-status.com/";

export const domains = ["vercel.com", "*.vercel.com"];

export const isServiceDefunct = false;

export const vercelStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
