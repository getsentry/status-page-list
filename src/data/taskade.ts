import { StatusPageInfo } from "../types";

export const name = "Taskade";

export const statusPageUrl = "https://status.taskade.com/";

export const domains = ["taskade.com", "*.taskade.com"];

export const isOperational = true;

export const taskadeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
