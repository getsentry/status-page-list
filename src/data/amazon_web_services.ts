import { StatusPageInfo } from "../types";

export const name = "Amazon Web Services";

export const statusPageUrl = "https://health.aws.amazon.com/health/status";

export const domains = ["aws.amazon.com", "amazonaws.com", "*.amazonaws.com"];

export const isServiceDefunct = false;

export const amazonWebServicesStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
