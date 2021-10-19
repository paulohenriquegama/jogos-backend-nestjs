-- AlterTable
ALTER TABLE `game` ADD COLUMN `favorite` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `admin` BOOLEAN NOT NULL DEFAULT false;
