import { NotFoundException, BadRequestException } from '@nestjs/common';

/**
 * Shared error utilities
 * Centralize error throwing patterns
 */

export class EntityNotFoundError extends NotFoundException {
  constructor(entity: string, identifier?: string) {
    const message = identifier
      ? `${entity} with ID ${identifier} not found`
      : `${entity} not found`;
    super(message);
  }
}

export class InvalidLocationError extends BadRequestException {
  constructor(message = 'Location is required and must be valid') {
    super(message);
  }
}

export class InvalidStatusError extends BadRequestException {
  constructor(status: string, validStatuses?: string[]) {
    const message = validStatuses
      ? `Invalid status "${status}". Valid options: ${validStatuses.join(', ')}`
      : `Invalid status: ${status}`;
    super(message);
  }
}

/**
 * Safe error thrower with type checking
 */
export function throwNotFound(entity: string, identifier?: string): never {
  throw new EntityNotFoundError(entity, identifier);
}

export function throwBadRequest(message: string): never {
  throw new BadRequestException(message);
}

export function throwInvalidLocation(): never {
  throw new InvalidLocationError();
}
