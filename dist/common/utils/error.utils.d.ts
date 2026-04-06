import { NotFoundException, BadRequestException } from '@nestjs/common';
export declare class EntityNotFoundError extends NotFoundException {
    constructor(entity: string, identifier?: string);
}
export declare class InvalidLocationError extends BadRequestException {
    constructor(message?: string);
}
export declare class InvalidStatusError extends BadRequestException {
    constructor(status: string, validStatuses?: string[]);
}
export declare function throwNotFound(entity: string, identifier?: string): never;
export declare function throwBadRequest(message: string): never;
export declare function throwInvalidLocation(): never;
