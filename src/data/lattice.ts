import { StatusPageInfo } from "../types";

export const name = "Lattice";

export const statusPageUrl = "https://status.lattice.com/";

export const domains = ["lattice.com", "*.lattice.com"];

export const isOperational = true;

export const latticeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
