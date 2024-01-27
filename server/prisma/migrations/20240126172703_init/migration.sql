-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "basicSalary" INTEGER NOT NULL,
    "bonuses" INTEGER NOT NULL,
    "insurance" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Employee" ("basicSalary", "birthDate", "bonuses", "createdAt", "department", "firstName", "gender", "id", "insurance", "lastName", "maritalStatus", "position", "updatedAt") SELECT "basicSalary", "birthDate", "bonuses", "createdAt", "department", "firstName", "gender", "id", "insurance", "lastName", "maritalStatus", "position", "updatedAt" FROM "Employee";
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
