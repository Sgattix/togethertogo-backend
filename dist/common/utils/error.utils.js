"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidStatusError = exports.InvalidLocationError = exports.EntityNotFoundError = void 0;
exports.throwNotFound = throwNotFound;
exports.throwBadRequest = throwBadRequest;
exports.throwInvalidLocation = throwInvalidLocation;
const common_1 = require("@nestjs/common");
class EntityNotFoundError extends common_1.NotFoundException {
    constructor(entity, identifier) {
        const message = identifier
            ? `${entity} with ID ${identifier} not found`
            : `${entity} not found`;
        super(message);
    }
}
exports.EntityNotFoundError = EntityNotFoundError;
class InvalidLocationError extends common_1.BadRequestException {
    constructor(message = 'Location is required and must be valid') {
        super(message);
    }
}
exports.InvalidLocationError = InvalidLocationError;
class InvalidStatusError extends common_1.BadRequestException {
    constructor(status, validStatuses) {
        const message = validStatuses
            ? `Invalid status "${status}". Valid options: ${validStatuses.join(', ')}`
            : `Invalid status: ${status}`;
        super(message);
    }
}
exports.InvalidStatusError = InvalidStatusError;
function throwNotFound(entity, identifier) {
    throw new EntityNotFoundError(entity, identifier);
}
function throwBadRequest(message) {
    throw new common_1.BadRequestException(message);
}
function throwInvalidLocation() {
    throw new InvalidLocationError();
}
//# sourceMappingURL=error.utils.js.map