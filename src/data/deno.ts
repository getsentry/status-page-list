import { StatusPageInfo } from "../types";

export const name = "Deno";

export const statusPageUrl = "https://denostatus.com/";

export const domains = ["deno.com", "*.deno.com", "deno.land", "*.deno.land"];

export const isServiceDefunct = false;

export const denoStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
