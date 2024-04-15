// @ts-expect-error Wrong import location because template
import { StatusPageInfo } from "../types";

export const name = "";

export const statusPageUrl = "";

export const domains = [""];

export const isServiceDefunct = false;

export const REPLACE_statusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
