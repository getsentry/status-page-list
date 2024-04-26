import { StatusPageInfo } from "../types";

export const name = "Algolia";

export const statusPageUrl = "https://status.algolia.com/";

export const domains = [
  "algolia.com",
  "*.algolia.com",
  "algolia.net",
  "*.algolia.net",
  "algolianet.com",
  "*.algolianet.com",
];

export const isServiceDefunct = false;

export const algoliaStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
