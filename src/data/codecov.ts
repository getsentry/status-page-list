import { StatusPageInfo } from "../types";

export const name = "Codecov";

export const statusPageUrl = "https://status.codecov.com/";

export const domains = ["codecov.io", "*.codecov.io"];

export const isOperational = true;

export const codecovStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
