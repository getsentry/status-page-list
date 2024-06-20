import { StatusPageInfo } from "../types";

export const name = "Python";

export const statusPageUrl = "https://status.python.org/";

export const domains = [
  "python.org",
  "*.python.org",
  "pypi.org",
  "*.pythonhosted.org",
];

export const isServiceDefunct = false;

export const pythonStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
