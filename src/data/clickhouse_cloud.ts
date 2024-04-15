import { StatusPageInfo } from "../types";

export const name = "Clickhouse Cloud";

export const statusPageUrl = "https://status.clickhouse.com/";

export const domains = ["clickhouse.com", "*.clickhouse.com"];

export const isServiceDefunct = false;

export const clickhousecloudStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
