import { StatusPageInfo } from "../types";

export const name = "Deno";

export const statusPageUrl = "https://denostatus.com/";

export const domains = ["deno.com", "*.deno.com", "deno.land", "*.deno.land"];

export const isOperational = true;

export const denoStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
