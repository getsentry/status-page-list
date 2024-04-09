import { StatusPageInfo } from "../types";

export const name = "Zoom";

export const statusPageUrl = "https://status.zoom.us/";

export const domains = ["zoom.us", "*.zoom.us"];

export const isOperational = true;

export const zoomStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
