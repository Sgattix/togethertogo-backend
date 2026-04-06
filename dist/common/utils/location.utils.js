"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeLocation = normalizeLocation;
exports.isLocationValid = isLocationValid;
function normalizeLocation(location) {
    if (location === null || location === undefined) {
        return undefined;
    }
    if (typeof location === 'string') {
        return location;
    }
    if (typeof location === 'object') {
        const loc = location;
        if (typeof loc.formatted === 'string' && loc.formatted.trim()) {
            return loc.formatted;
        }
        const line1 = typeof loc.address_line1 === 'string' ? loc.address_line1.trim() : '';
        const line2 = typeof loc.address_line2 === 'string' ? loc.address_line2.trim() : '';
        const combined = [line1, line2].filter(Boolean).join(', ');
        if (combined) {
            return combined;
        }
        try {
            return JSON.stringify(location);
        }
        catch {
            return String(location);
        }
    }
    return String(location);
}
function isLocationValid(location) {
    const normalized = normalizeLocation(location);
    return !!normalized?.trim();
}
//# sourceMappingURL=location.utils.js.map