import { StatusPageInfo } from "../types";

export const name = "Riot Games";

export const statusPageUrl = "https://status.riotgames.com";

export const domains = ["riotgames.com", "*.riotgames.com"];

export const isOperational = true;

export const riotGamesStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
