/*
  Warnings:

  - You are about to drop the column `gameId` on the `genre` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `genre` DROP FOREIGN KEY `Genre_gameId_fkey`;

-- AlterTable
ALTER TABLE `genre` DROP COLUMN `gameId`;

-- CreateTable
CREATE TABLE `_GameToGenre` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GameToGenre_AB_unique`(`A`, `B`),
    INDEX `_GameToGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GameToGenre` ADD FOREIGN KEY (`A`) REFERENCES `Game`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GameToGenre` ADD FOREIGN KEY (`B`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
