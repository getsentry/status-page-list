import { StatusPageInfo } from "../types";

export const name = "Jitterbit";

export const statusPageUrl = "https://trust.jitterbit.com/";

export const domains = ["jitterbit.com", "*.jitterbit.com"];

export const isServiceDefunct = false;

export const jitterbitStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
