import { StatusPageInfo } from "../types";

export const name = "Shopify";

export const statusPageUrl = "https://www.shopifystatus.com/";

export const domains = ["shopify.com", "myshopify.com", "*.myshopify.com"];

export const isOperational = true;

export const shopifyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
