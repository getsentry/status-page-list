import { StatusPageInfo } from "../types";

export const name = "Segment";

export const statusPageUrl = "https://status.segment.com/";

export const domains = [
  "segment.com",
  "*.segment.com",
  "segment.io",
  "*.segment.io",
];

export const isServiceDefunct = false;

export const segmentStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
