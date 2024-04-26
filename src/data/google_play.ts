import { StatusPageInfo } from "../types";

export const name = "Google Play";

export const statusPageUrl = "https://status.play.google.com/";

export const domains = ["play.googleapis.com"];

export const isServiceDefunct = false;

export const googlePlayStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
