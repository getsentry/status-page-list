import { StatusPageInfo } from "../types";

export const name = "Etsy";

export const statusPageUrl = "https://www.etsystatus.com/";

export const domains = ["etsy.com", "*.etsy.com"];

export const isServiceDefunct = false;

export const etsyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
