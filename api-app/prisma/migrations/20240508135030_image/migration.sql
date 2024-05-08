/*
  Warnings:

  - You are about to drop the column `alt` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `alt`,
    DROP COLUMN `url`;
