import { StatusPageInfo } from "../types";

export const name = "Slack";

export const statusPageUrl = "https://slack-status.com/";

export const domains = ["slack.com", "*.slack.com"];

export const isServiceDefunct = false;

export const slackStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
