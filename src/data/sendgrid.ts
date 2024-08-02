import { StatusPageInfo } from "../types";

export const name = "SendGrid";

export const statusPageUrl = "https://status.sendgrid.com/";

export const domains = ["sendgrid.com", "*.sendgrid.com"];

export const isServiceDefunct = false;

export const sendGridStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
