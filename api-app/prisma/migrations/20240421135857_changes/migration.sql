-- AlterTable
ALTER TABLE `abonnementuser` ADD COLUMN `abonnementId` INTEGER NULL;

-- AlterTable
ALTER TABLE `commentairep` ADD COLUMN `commentaireId` INTEGER NULL;

-- CreateTable
CREATE TABLE `LikesP` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `likesId` INTEGER NULL,
    `userId` INTEGER NULL,
    `productId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CommentaireP` ADD CONSTRAINT `CommentaireP_commentaireId_fkey` FOREIGN KEY (`commentaireId`) REFERENCES `Commentaire`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LikesP` ADD CONSTRAINT `LikesP_likesId_fkey` FOREIGN KEY (`likesId`) REFERENCES `Likes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LikesP` ADD CONSTRAINT `LikesP_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LikesP` ADD CONSTRAINT `LikesP_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AbonnementUser` ADD CONSTRAINT `AbonnementUser_abonnementId_fkey` FOREIGN KEY (`abonnementId`) REFERENCES `Abonnement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
