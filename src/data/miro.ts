import { StatusPageInfo } from "../types";

export const name = "Miro";

export const statusPageUrl = "https://status.miro.com/";

export const domains = ["miro.com", "*.miro.com"];

export const isServiceDefunct = false;

export const miroStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
