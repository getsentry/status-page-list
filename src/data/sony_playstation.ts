import { StatusPageInfo } from "../types";

export const name = "Sony Playstation";

export const statusPageUrl = "https://status.playstation.com/";

export const domains = ["playstation.com", "*.playstation.com"];

export const isServiceDefunct = false;

export const sonyPlaystationStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
