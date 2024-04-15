import { StatusPageInfo } from "../types";

export const name = "Twitch";

export const statusPageUrl = "https://status.twitch.com/";

export const domains = ["twitch.com", "*.twitch.com"];

export const isServiceDefunct = false;

export const twitchStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
