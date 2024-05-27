-- AlterTable
ALTER TABLE `product` ADD COLUMN `categorieId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `Categorie`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
