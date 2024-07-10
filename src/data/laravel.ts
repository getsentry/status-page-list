import { StatusPageInfo } from "../types";

export const name = "Laravel";

export const statusPageUrl = "https://status.laravel.com/";

export const domains = ["laravel.com", "*.laravel.com", "envoyer.io"];

export const isServiceDefunct = false;

export const laravelStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
