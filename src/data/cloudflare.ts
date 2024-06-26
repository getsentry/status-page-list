import { StatusPageInfo } from "../types";

export const name = "Cloudflare";

export const statusPageUrl = "https://www.cloudflarestatus.com/";

export const domains = ["cloudflare.com", "*.cloudflare.com"];

export const isServiceDefunct = false;

export const cloudflareStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
