/*
  Warnings:

  - You are about to alter the column `note_timestamp` on the `customer_note` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_date` on the `customer_note` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_date` on the `customer_note` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_date` on the `service_levels` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_date` on the `service_levels` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `customer_note` MODIFY `note_timestamp` TIMESTAMP NOT NULL,
    MODIFY `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_date` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `service_levels` MODIFY `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_date` TIMESTAMP NOT NULL;
