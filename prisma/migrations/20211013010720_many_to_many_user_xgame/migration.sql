/*
  Warnings:

  - You are about to drop the `usersongames` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `usersongames` DROP FOREIGN KEY `UsersOnGames_gameId_fkey`;

-- DropForeignKey
ALTER TABLE `usersongames` DROP FOREIGN KEY `UsersOnGames_userId_fkey`;

-- AlterTable
ALTER TABLE `game` MODIFY `description` VARCHAR(191);

-- DropTable
DROP TABLE `usersongames`;

-- CreateTable
CREATE TABLE `_GameToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GameToUser_AB_unique`(`A`, `B`),
    INDEX `_GameToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Genre_name_key` ON `Genre`(`name`);

-- AddForeignKey
ALTER TABLE `_GameToUser` ADD FOREIGN KEY (`A`) REFERENCES `Game`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GameToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
