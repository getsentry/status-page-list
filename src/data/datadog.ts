import { StatusPageInfo } from "../types";

export const name = "Datadog";

export const statusPageUrl = "https://status.datadoghq.com/";

export const domains = ["datadoghq.com", "*.datadoghq.com"];

export const isServiceDefunct = false;

export const datadogStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
