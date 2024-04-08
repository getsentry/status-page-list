// @ts-expect-error Wrong import location because template
import { StatusPageInfo } from "../types";

export const name = "";

export const statusPageUrl = "";

export const domains = [""];

export const isOperational = true;

export const REPLACE_statusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
