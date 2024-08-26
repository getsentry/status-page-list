import { StatusPageInfo } from "../types";

export const name = "Autodesk";

export const statusPageUrl = "https://health.autodesk.com/";

export const domains = ["autodesk.com", "*.autodesk.com"];

export const isServiceDefunct = false;

export const autodeskStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
