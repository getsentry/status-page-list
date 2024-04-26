import { StatusPageInfo } from "../types";

export const name = "Appveyor";

export const statusPageUrl = "https://status.appveyor.com/";

export const domains = ["appveyor.com", "*.appveyor.com"];

export const isServiceDefunct = false;

export const appveyorStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
