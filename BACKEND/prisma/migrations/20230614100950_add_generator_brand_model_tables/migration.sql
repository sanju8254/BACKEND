-- CreateTable
CREATE TABLE `generator_models` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `model_name` VARCHAR(191) NULL,
    `brand_id` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `generator_models` ADD CONSTRAINT `generator_models_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `generator_brands`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
