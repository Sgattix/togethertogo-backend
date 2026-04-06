/*
  Warnings:

  - A unique constraint covering the columns `[emailChangeToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `accountStatus` ENUM('ACTIVE', 'SUSPENDED', 'DELETED') NOT NULL DEFAULT 'ACTIVE',
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `emailChangeToken` VARCHAR(191) NULL,
    ADD COLUMN `emailChangeTokenExpiresAt` DATETIME(3) NULL,
    ADD COLUMN `pendingEmail` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_emailChangeToken_key` ON `User`(`emailChangeToken`);
