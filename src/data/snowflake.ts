import { StatusPageInfo } from "../types";

export const name = "Snowflake";

export const statusPageUrl = "https://status.snowflake.com/";

export const domains = ["snowflake.com", "*.snowflake.com"];

export const isOperational = true;

export const snowflakeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
