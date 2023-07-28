-- CreateTable
CREATE TABLE `customer_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_name` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `contact_name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(255) NULL,
    `address` VARCHAR(191) NULL,
    `billing_address` VARCHAR(191) NULL,
    `contact` VARCHAR(191) NULL,
    `customer_type_id` INTEGER NOT NULL DEFAULT 0,
    `user_type` INTEGER NOT NULL DEFAULT 0,
    `created_by` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contract_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_name` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `generator_brands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_name` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `generator_phase_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phase_type` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `work_order_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status_name` VARCHAR(191) NULL,
    `color_code` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `applies_to` INTEGER NOT NULL DEFAULT 1,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `service_levels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_name` INTEGER NOT NULL,
    `service_limit` INTEGER NOT NULL,
    `threshold_limit` INTEGER NOT NULL DEFAULT 0,
    `default_load_test_duration` INTEGER NOT NULL,
    `on_screen_color_code` VARCHAR(15) NOT NULL,
    `on_report_color_code` VARCHAR(15) NOT NULL,
    `default_duration` INTEGER NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_by` INTEGER NOT NULL DEFAULT 0,
    `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_date` TIMESTAMP NOT NULL,

    UNIQUE INDEX `service_levels_service_name_key`(`service_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blackout_day_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `blackout_day_types_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blackout_days` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `day_type_id` INTEGER NOT NULL DEFAULT 0,
    `title` VARCHAR(191) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `applies_to` INTEGER NOT NULL DEFAULT 0,
    `color_code` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `blackout_days_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `thresold_reminder_days` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `thresold_day` INTEGER NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_contacts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `first_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `primary_email` VARCHAR(191) NULL,
    `secondary_email` VARCHAR(191) NULL,
    `home_phone_number` VARCHAR(191) NULL,
    `work_phone_number` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `fax_phone_number` VARCHAR(191) NULL,
    `other_phone_number1` VARCHAR(191) NULL,
    `other_phone_number2` VARCHAR(191) NULL,
    `job_title` VARCHAR(191) NULL,
    `is_primary` INTEGER NOT NULL DEFAULT 0,
    `created_by` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_note_title_master` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `created_by` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `customer_note_title_master_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_status_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `created_by` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `customer_status_list_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `misc_configuration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `created_by` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logging_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `configuare_value` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `smtp_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `host_name` VARCHAR(191) NULL,
    `port_no` INTEGER NOT NULL DEFAULT 0,
    `user_name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `encryption_type` VARCHAR(191) NULL,
    `sent_from` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `appearances` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `appearance_permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `appearance_id` INTEGER NOT NULL DEFAULT 0,
    `permission_id` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `appearance_groups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_id` INTEGER NOT NULL DEFAULT 0,
    `appearance_id` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_name` VARCHAR(255) NOT NULL,
    `customer_type_id` INTEGER NOT NULL DEFAULT 0,
    `physical_address` TEXT NOT NULL,
    `billing_address` TEXT NOT NULL,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_by` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
