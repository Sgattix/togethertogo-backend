"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SprintFiltersBuilder = void 0;
exports.sprintFilters = sprintFilters;
class SprintFiltersBuilder {
    constructor() {
        this.where = {};
    }
    withProgressStatus(status) {
        if (status) {
            this.where.progressStatus = status;
        }
        return this;
    }
    withGovernmentAuthorizationStatus(status) {
        if (status) {
            this.where.governmentAuthorizationStatus = status;
        }
        return this;
    }
    withPlatformAuthorizationStatus(status) {
        if (status) {
            this.where.platformAuthorizationStatus = status;
        }
        return this;
    }
    withLocation(location) {
        if (location?.trim()) {
            this.where.location = {
                contains: location.trim(),
            };
        }
        return this;
    }
    withDateRange(dateFrom, dateTo) {
        if (dateFrom || dateTo) {
            this.where.startDate = {};
            if (dateFrom) {
                this.where.startDate.gte = new Date(dateFrom);
            }
            if (dateTo) {
                this.where.startDate.lte = new Date(dateTo);
            }
        }
        return this;
    }
    fromDto(filters) {
        if (!filters)
            return this;
        this.withProgressStatus(filters.progressStatus);
        this.withGovernmentAuthorizationStatus(filters.governmentAuthorizationStatus);
        this.withPlatformAuthorizationStatus(filters.platformAuthorizationStatus);
        this.withLocation(filters.location);
        this.withDateRange(filters.dateFrom, filters.dateTo);
        return this;
    }
    build() {
        return this.where;
    }
}
exports.SprintFiltersBuilder = SprintFiltersBuilder;
function sprintFilters() {
    return new SprintFiltersBuilder();
}
//# sourceMappingURL=sprints-filters.builder.js.map