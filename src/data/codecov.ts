import { StatusPageInfo } from "../types";

export const name = "Codecov";

export const statusPageUrl = "https://status.codecov.com/";

export const domains = [
  "codecov.io",
  "*.codecov.io",
  "codecov.dev",
  "*.codecov.dev",
];

export const isServiceDefunct = false;

export const codecovStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
