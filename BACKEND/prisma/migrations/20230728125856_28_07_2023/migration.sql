/*
  Warnings:

  - You are about to alter the column `created_date` on the `service_levels` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_date` on the `service_levels` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `service_levels` MODIFY `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_date` TIMESTAMP NOT NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_customer_type_id_fkey` FOREIGN KEY (`customer_type_id`) REFERENCES `customer_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_user_type_fkey` FOREIGN KEY (`user_type`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `generator_models` ADD CONSTRAINT `generator_models_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `generator_brands`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blackout_days` ADD CONSTRAINT `blackout_days_day_type_id_fkey` FOREIGN KEY (`day_type_id`) REFERENCES `blackout_day_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer_contacts` ADD CONSTRAINT `customer_contacts_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appearance_permissions` ADD CONSTRAINT `appearance_permissions_appearance_id_fkey` FOREIGN KEY (`appearance_id`) REFERENCES `appearances`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appearance_permissions` ADD CONSTRAINT `appearance_permissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appearance_groups` ADD CONSTRAINT `appearance_groups_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appearance_groups` ADD CONSTRAINT `appearance_groups_appearance_id_fkey` FOREIGN KEY (`appearance_id`) REFERENCES `appearances`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer_details` ADD CONSTRAINT `customer_details_customer_type_id_fkey` FOREIGN KEY (`customer_type_id`) REFERENCES `customer_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
