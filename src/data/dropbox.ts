import { StatusPageInfo } from "../types";

export const name = "Dropbox";

export const statusPageUrl = "https://status.dropbox.com/";

export const domains = [
  "dropbox.com",
  "*.dropbox.com",
  "dropboxapi.com",
  "*.dropboxapi.com",
  "dropboxstatic.com",
  "*.dropboxstatic.com",
  "getdropbox.com",
  "*.getdropbox.com",
  "dropboxusercontent.com",
  "*.dropboxusercontent.com",
];

export const isServiceDefunct = false;

export const dropboxStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
