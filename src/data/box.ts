import { StatusPageInfo } from "../types";

export const name = "Box";

export const statusPageUrl = "https://status.box.com/";

export const domains = ["box.com", "*.box.com"];

export const isOperational = true;

export const boxStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
