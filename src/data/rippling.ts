import { StatusPageInfo } from "../types";

export const name = "Rippling";

export const statusPageUrl = "https://status.rippling.com/";

export const domains = ["rippling.com", "*.rippling.com"];

export const isServiceDefunct = false;

export const ripplingStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
