-- CreateTable
CREATE TABLE `work_order_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_type` VARCHAR(191) NULL,
    `on_screen_color_code` VARCHAR(191) NULL,
    `on_report_color_code` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
