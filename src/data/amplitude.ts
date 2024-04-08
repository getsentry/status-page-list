import { StatusPageInfo } from "../types";

export const name = "Amplitude";

export const statusPageUrl = "https://status.amplitude.com/";

export const domains = ["amplitude.com", "*.amplitude.com"];

export const isOperational = true;

export const amplitudeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
