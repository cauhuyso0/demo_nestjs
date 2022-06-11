/*
  Warnings:

  - You are about to drop the column `member` on the `Story` table. All the data in the column will be lost.
  - Added the required column `members` to the `Story` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Story" DROP COLUMN "member",
ADD COLUMN     "members" INTEGER NOT NULL;
