import { StatusPageInfo } from "../types";

export const name = "Stripe";

export const statusPageUrl = "https://status.stripe.com/";

export const domains = ["stripe.com", "*.stripe.com"];

export const isServiceDefunct = false;

export const stripeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
