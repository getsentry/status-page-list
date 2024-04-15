import { StatusPageInfo } from "../types";

export const name = "Netlify";

export const statusPageUrl = "https://www.netlifystatus.com/";

export const domains = ["netlify.com", "*.netlify.com"];

export const isServiceDefunct = false;

export const netlifyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
