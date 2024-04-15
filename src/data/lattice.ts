import { StatusPageInfo } from "../types";

export const name = "Lattice";

export const statusPageUrl = "https://status.lattice.com/";

export const domains = ["lattice.com", "*.lattice.com"];

export const isServiceDefunct = false;

export const latticeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
