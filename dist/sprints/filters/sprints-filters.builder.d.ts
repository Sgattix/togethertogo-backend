import { FilterSprintsDto } from '../dto/sprint.dto';
export declare class SprintFiltersBuilder {
    private where;
    withProgressStatus(status?: string): this;
    withGovernmentAuthorizationStatus(status?: string): this;
    withPlatformAuthorizationStatus(status?: string): this;
    withLocation(location?: string): this;
    withDateRange(dateFrom?: string, dateTo?: string): this;
    fromDto(filters: FilterSprintsDto): this;
    build(): any;
}
export declare function sprintFilters(): SprintFiltersBuilder;
