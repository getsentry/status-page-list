import { StatusPageInfo } from "../types";

export const name = "Mapbox";

export const statusPageUrl = "https://status.mapbox.com/";

export const domains = ["mapbox.com", "*.mapbox.com"];

export const isServiceDefunct = false;

export const mapboxStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
