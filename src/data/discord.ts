import { StatusPageInfo } from "../types";

export const name = "Discord";

export const statusPageUrl = "https://discordstatus.com/";

export const domains = ["discord.com"];

export const isOperational = true;

export const discordStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
