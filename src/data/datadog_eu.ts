import { StatusPageInfo } from "../types";

export const name = "Datadog EU";

export const statusPageUrl = "https://status.datadoghq.eu/";

export const domains = ["datadoghq.eu", "*.datadog.eu"];

export const isOperational = true;

export const datadogEUStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
