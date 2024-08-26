import { StatusPageInfo } from "../types";

export const name = "PlanetScale";

export const statusPageUrl = "https://www.planetscalestatus.com/";

export const domains = ["planetscale.com", "*.planetscale.com"];

export const isServiceDefunct = false;

export const planetScaleStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
