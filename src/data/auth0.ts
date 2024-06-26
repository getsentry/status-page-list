import { StatusPageInfo } from "../types";

export const name = "Auth0";

export const statusPageUrl = "https://status.auth0.com/";

export const domains = ["auth0.com", "*.auth0.com"];

export const isServiceDefunct = false;

export const auth0StatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
