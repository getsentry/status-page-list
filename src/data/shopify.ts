import { StatusPageInfo } from "../types";

export const name = "Shopify";

export const statusPageUrl = "https://www.shopifystatus.com/";

export const domains = ["shopify.com", "myshopify.com", "*.myshopify.com"];

export const isServiceDefunct = false;

export const shopifyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
