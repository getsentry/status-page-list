import { StatusPageInfo } from "../types";

export const name = "Travis CI";

export const statusPageUrl = "https://www.traviscistatus.com/";

export const domains = [
  "travis-ci.com",
  "*.travis-ci.com",
  "travis-ci.org",
  "*.travis-ci.org",
];

export const isServiceDefunct = false;

export const travisCiStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
