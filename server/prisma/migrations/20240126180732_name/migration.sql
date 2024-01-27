/*
  Warnings:

  - You are about to alter the column `basicSalary` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `birthDate` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `bonuses` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - Added the required column `address` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childrenCount` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hireDate` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobLevel` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobTitle` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socialStatus` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "hireDate" DATETIME NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "socialStatus" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobLevel" TEXT NOT NULL,
    "baseSalary" REAL NOT NULL DEFAULT 0,
    "basicSalary" REAL NOT NULL DEFAULT 0,
    "bonuses" REAL NOT NULL DEFAULT 0,
    "allowances" REAL NOT NULL DEFAULT 0,
    "deductions" REAL NOT NULL DEFAULT 0,
    "insurance" BOOLEAN NOT NULL,
    "childrenCount" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Employee" ("basicSalary", "birthDate", "bonuses", "createdAt", "department", "firstName", "gender", "id", "insurance", "lastName", "maritalStatus", "position", "updatedAt") SELECT "basicSalary", "birthDate", "bonuses", "createdAt", "department", "firstName", "gender", "id", "insurance", "lastName", "maritalStatus", "position", "updatedAt" FROM "Employee";
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
CREATE UNIQUE INDEX "Employee_lastName_key" ON "Employee"("lastName");
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
CREATE UNIQUE INDEX "Employee_phone_key" ON "Employee"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
