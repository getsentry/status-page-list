import { StatusPageInfo } from "../types";

export const name = "InfluxData";

export const statusPageUrl = "https://status.influxdata.com/";

export const domains = ["influxdata.com", "*.influxdata.com"];

export const isServiceDefunct = false;

export const influxDataStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
