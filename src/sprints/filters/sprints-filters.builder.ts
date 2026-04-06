/**
 * Sprint Filters Builder
 * Encapsulates complex filtering logic for sprint queries
 */

import { FilterSprintsDto } from '../dto/sprint.dto';

export class SprintFiltersBuilder {
  private where: any = {};

  /**
   * Apply progress status filter
   */
  withProgressStatus(status?: string): this {
    if (status) {
      this.where.progressStatus = status;
    }
    return this;
  }

  /**
   * Apply government authorization status filter
   */
  withGovernmentAuthorizationStatus(status?: string): this {
    if (status) {
      this.where.governmentAuthorizationStatus = status;
    }
    return this;
  }

  /**
   * Apply platform authorization status filter
   */
  withPlatformAuthorizationStatus(status?: string): this {
    if (status) {
      this.where.platformAuthorizationStatus = status;
    }
    return this;
  }

  /**
   * Apply location filter (partial match)
   */
  withLocation(location?: string): this {
    if (location?.trim()) {
      this.where.location = {
        contains: location.trim(),
      };
    }
    return this;
  }

  /**
   * Apply date range filter
   */
  withDateRange(dateFrom?: string, dateTo?: string): this {
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

  /**
   * Apply multiple filters from DTO
   */
  fromDto(filters: FilterSprintsDto): this {
    if (!filters) return this;

    this.withProgressStatus(filters.progressStatus);
    this.withGovernmentAuthorizationStatus(
      filters.governmentAuthorizationStatus,
    );
    this.withPlatformAuthorizationStatus(filters.platformAuthorizationStatus);
    this.withLocation(filters.location);
    this.withDateRange(filters.dateFrom, filters.dateTo);

    return this;
  }

  /**
   * Get the built where clause
   */
  build(): any {
    return this.where;
  }
}

/**
 * Factory function for fluent API
 */
export function sprintFilters(): SprintFiltersBuilder {
  return new SprintFiltersBuilder();
}
