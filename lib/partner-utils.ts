/**
 * Partner Navigation Utilities
 * 
 * Centralized helper for creating in-frame partner URLs.
 * Ensures all partner links remain within the TravelWell ecosystem
 * and maintain proper affiliate attribution and session continuity.
 */

/**
 * Creates an in-frame partner URL that keeps users within TravelWell
 * 
 * @param url - The partner's deep link URL
 * @param name - The partner's display name
 * @param returnPath - The path to return to when user clicks "Back to TravelWell"
 * @returns Encoded URL string for the partner frame page
 */
export function getPartnerUrl(url: string, name: string, returnPath: string = "/discover"): string {
  return `/partner?url=${encodeURIComponent(url)}&name=${encodeURIComponent(name)}&return=${encodeURIComponent(returnPath)}`
}

/**
 * Decodes partner URL parameters
 * Useful for extracting data from the partner frame page
 */
export function decodePartnerParams(searchParams: URLSearchParams): {
  partnerUrl: string
  partnerName: string
  returnPath: string
} {
  return {
    partnerUrl: searchParams.get("url") || "",
    partnerName: searchParams.get("name") || "Partner",
    returnPath: searchParams.get("return") || "/discover",
  }
}
