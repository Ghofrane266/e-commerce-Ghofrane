/*
  Warnings:

  - Made the column `link` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `link` VARCHAR(191) NOT NULL;
