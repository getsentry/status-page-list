import { StatusPageInfo } from "../types";

export const name = "Udemy";

export const statusPageUrl = "https://status.udemy.com/";

export const domains = ["udemy.com", "*.udemy.com"];

export const isServiceDefunct = false;

export const udemyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
