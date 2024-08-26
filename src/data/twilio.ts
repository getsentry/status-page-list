import { StatusPageInfo } from "../types";

export const name = "Twilio";

export const statusPageUrl = "https://status.twilio.com/";

export const domains = ["twilio.com", "*.twilio.com"];

export const isServiceDefunct = false;

export const twilioStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
