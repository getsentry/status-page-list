import { StatusPageInfo } from "../types";

export const name = "Alibaba Cloud";

export const statusPageUrl = "https://status.alibabacloud.com";

export const domains = ["alibabacloud.com", "*.alibabacloud.com"];

export const isOperational = true;

export const alibabaCloudStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
