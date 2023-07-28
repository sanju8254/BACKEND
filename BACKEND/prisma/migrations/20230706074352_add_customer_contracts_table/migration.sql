/*
  Warnings:

  - You are about to alter the column `created_date` on the `service_levels` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_date` on the `service_levels` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `service_levels` MODIFY `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_date` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `created_by` INTEGER NOT NULL DEFAULT 0;

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

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_customer_type_id_fkey` FOREIGN KEY (`customer_type_id`) REFERENCES `customer_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer_contacts` ADD CONSTRAINT `customer_contacts_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
