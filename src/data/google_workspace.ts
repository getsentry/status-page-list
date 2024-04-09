import { StatusPageInfo } from "../types";

export const name = "Google Workspace";

export const statusPageUrl = "https://www.google.com/appsstatus/dashboard/";

export const domains = ["workspace.google.com"];

export const isOperational = true;

export const googleWorkspaceStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
