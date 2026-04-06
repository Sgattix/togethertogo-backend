/**
 * Location utilities
 * Centralized location handling and normalization
 */

export interface LocationObject {
  formatted?: string;
  address_line1?: string;
  address_line2?: string;
  [key: string]: unknown;
}

/**
 * Normalize location from various input formats
 * @param location - Location input (string, object, etc)
 * @returns Normalized location string
 */
export function normalizeLocation(location: unknown): string | undefined {
  if (location === null || location === undefined) {
    return undefined;
  }

  if (typeof location === 'string') {
    return location;
  }

  if (typeof location === 'object') {
    const loc = location as LocationObject;

    // Prefer formatted address
    if (typeof loc.formatted === 'string' && loc.formatted.trim()) {
      return loc.formatted;
    }

    // Combine address line parts
    const line1 =
      typeof loc.address_line1 === 'string' ? loc.address_line1.trim() : '';
    const line2 =
      typeof loc.address_line2 === 'string' ? loc.address_line2.trim() : '';
    const combined = [line1, line2].filter(Boolean).join(', ');
    if (combined) {
      return combined;
    }

    // Fallback to JSON string
    try {
      return JSON.stringify(location);
    } catch {
      return String(location);
    }
  }

  return String(location);
}

/**
 * Validate that location is not empty
 */
export function isLocationValid(location: unknown): boolean {
  const normalized = normalizeLocation(location);
  return !!normalized?.trim();
}
