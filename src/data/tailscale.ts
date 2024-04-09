import { StatusPageInfo } from "../types";

export const name = "Tailscale";

export const statusPageUrl = "https://status.tailscale.com/";

export const domains = ["tailscale.com", "*.tailscale.com"];

export const isOperational = true;

export const tailscaleStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
