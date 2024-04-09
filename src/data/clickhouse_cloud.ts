import { StatusPageInfo } from "../types";

export const name = "Clickhouse Cloud";

export const statusPageUrl = "https://status.clickhouse.com/";

export const domains = ["clickhouse.com", "*.clickhouse.com"];

export const isOperational = true;

export const clickhousecloudStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
