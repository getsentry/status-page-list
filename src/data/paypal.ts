import { StatusPageInfo } from "../types";

export const name = "PayPal";

export const statusPageUrl = "https://www.paypal-status.com/product/production";

export const domains = [
  "paypal.com",
  "*.paypal.com",
  "braintree-api.com",
  "*.braintree-api.com",
  "braintreegateway.com",
  "*.braintreegateway.com",
];

export const isServiceDefunct = false;

export const payPalStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
