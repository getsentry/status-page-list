import { StatusPageInfo } from "../types";

export const name = "MongoDB Cloud";

export const statusPageUrl = "https://status.mongodb.com/";

export const domains = ["mongodb.com", "*.mongodb.com"];

export const isOperational = true;

export const mongodbcloudStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
