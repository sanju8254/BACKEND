/*
  Warnings:

  - You are about to alter the column `created_date` on the `service_levels` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_date` on the `service_levels` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `service_levels` MODIFY `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_date` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `customer_note` (
    `customer_note_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `note_timestamp` TIMESTAMP NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `body` TEXT NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `is_deleted` INTEGER NOT NULL DEFAULT 0,
    `created_by` VARCHAR(15) NOT NULL,
    `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_date` TIMESTAMP NOT NULL,

    PRIMARY KEY (`customer_note_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
