import { StatusPageInfo } from "../types";

export const name = "Fastly";

export const statusPageUrl = "https://www.fastlystatus.com/";

export const domains = ["fastly.com", "*.fastly.com"];

export const isOperational = true;

export const fastlyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
