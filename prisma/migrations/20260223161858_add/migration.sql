-- AlterTable
ALTER TABLE `Sprint` ADD COLUMN `platformAuthorizationStatus` VARCHAR(191) NOT NULL DEFAULT 'draft',
    MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'planned';
