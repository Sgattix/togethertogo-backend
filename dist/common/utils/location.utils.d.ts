export interface LocationObject {
    formatted?: string;
    address_line1?: string;
    address_line2?: string;
    [key: string]: unknown;
}
export declare function normalizeLocation(location: unknown): string | undefined;
export declare function isLocationValid(location: unknown): boolean;
