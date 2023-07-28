-- CreateTable
CREATE TABLE `service_levels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_name` INTEGER NOT NULL,
    `service_limit` INTEGER NOT NULL,
    `default_load_test_duration` INTEGER NOT NULL,
    `on_screen_color_code` VARCHAR(15) NOT NULL,
    `on_report_color_code` VARCHAR(15) NOT NULL,
    `default_duration` INTEGER NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_by` VARCHAR(15) NOT NULL,
    `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_date` TIMESTAMP NOT NULL,

    UNIQUE INDEX `service_levels_service_name_key`(`service_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
