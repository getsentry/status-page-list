import { StatusPageInfo } from "../types";

export const name = "Hex";

export const statusPageUrl = "https://status.hex.pm/";

export const domains = ["hex.pm", "*.hex.pm", "hexdocs.pm"];

export const isServiceDefunct = false;

export const hexStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
