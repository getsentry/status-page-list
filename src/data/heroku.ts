import { StatusPageInfo } from "../types";

export const name = "Heroku";

export const statusPageUrl = "https://status.heroku.com/";

export const domains = ["*.heroku.com", "heroku.com"];

export const isServiceDefunct = false;

export const herokuStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
