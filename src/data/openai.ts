import { StatusPageInfo } from "../types";

export const name = "OpenAI";

export const statusPageUrl = "https://status.openai.com/";

export const domains = ["openai.com", "*.openai.com"];

export const isServiceDefunct = false;

export const openAIStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
