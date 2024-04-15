import { StatusPageInfo } from "../types";

export const name = "Tailscale";

export const statusPageUrl = "https://status.tailscale.com/";

export const domains = ["tailscale.com", "*.tailscale.com"];

export const isServiceDefunct = false;

export const tailscaleStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
