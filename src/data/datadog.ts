import { StatusPageInfo } from "../types";

export const name = "Datadog";

export const statusPageUrl = "https://status.datadoghq.com/";

export const domains = ["datadoghq.com", "*.datadoghq.com"];

export const isOperational = true;

export const datadogStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
