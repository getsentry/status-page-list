export interface StatusPageInfo {
  /**
   * The name of the service.
   */
  name: string;
  /**
   * The URL of the status page.
   */
  statusPageUrl: string;
  /**
   * The domains that the service uses.
   */
  domains: string[];
  /**
   * Whether the service is defunct.
   *
   * Used to deprecate services without having to release major versions
   * to remove defunct services.
   */
  isServiceDefunct: boolean;
}
