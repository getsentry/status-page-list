import { StatusPageInfo } from "../types";

export const name = "Dropbox";

export const statusPageUrl = "https://status.dropbox.com/";

export const domains = ["dropbox.com"];

export const isServiceDefunct = false;

export const dropboxStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
