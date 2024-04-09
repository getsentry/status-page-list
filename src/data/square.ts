import { StatusPageInfo } from "../types";

export const name = "Square";

export const statusPageUrl = "https://www.issquareup.com/";

export const domains = ["squareup.com", "*.squareup.com"];

export const isOperational = true;

export const squareStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
