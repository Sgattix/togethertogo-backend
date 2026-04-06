-- AlterTable
ALTER TABLE `Volunteer`
    ADD COLUMN `userId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Volunteer_userId_key` ON `Volunteer`(`userId`);
CREATE INDEX `Volunteer_userId_idx` ON `Volunteer`(`userId`);

-- AddForeignKey
ALTER TABLE `Volunteer`
    ADD CONSTRAINT `Volunteer_userId_fkey`
    FOREIGN KEY (`userId`) REFERENCES `User`(`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE;
