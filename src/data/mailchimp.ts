import { StatusPageInfo } from "../types";

export const name = "Mailchimp";

export const statusPageUrl = "https://status.mailchimp.com/";

export const domains = ["mailchimp.com", "*.mailchimp.com"];

export const isServiceDefunct = false;

export const mailchimpStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
