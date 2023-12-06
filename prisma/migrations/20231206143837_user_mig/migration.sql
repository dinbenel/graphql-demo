/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[authId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "authId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- DropEnum
DROP TYPE "EProviders";

-- CreateIndex
CREATE UNIQUE INDEX "User_authId_key" ON "User"("authId");
