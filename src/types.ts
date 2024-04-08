export interface StatusPageInfo {
  /**
   * The name of the service.
   */
  name: string;
  /**
   * The domains that the service uses.
   */
  domains: string[];
  /**
   * The URL of the status page.
   */
  statusPageUrl: string;
  /**
   * Whether the service is operational.
   */
  isOperational: boolean;
}
