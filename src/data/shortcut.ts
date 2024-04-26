import { StatusPageInfo } from "../types";

export const name = "Shortcut";

export const statusPageUrl = "https://status.shortcut.com/";

export const domains = ["shortcut.com", "*.shortcut.com"];

export const isServiceDefunct = false;

export const shortcutStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
