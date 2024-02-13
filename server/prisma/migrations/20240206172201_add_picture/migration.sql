-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "hireDate" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "socialStatus" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobLevel" TEXT NOT NULL,
    "baseSalary" REAL NOT NULL DEFAULT 0,
    "basicSalary" REAL NOT NULL DEFAULT 0,
    "bonuses" REAL NOT NULL DEFAULT 0,
    "allowances" REAL NOT NULL DEFAULT 0,
    "deductions" REAL NOT NULL DEFAULT 0,
    "insurance" BOOLEAN NOT NULL,
    "childrenCount" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "picture" TEXT NOT NULL DEFAULT 'default.jpg',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Employee" ("address", "allowances", "baseSalary", "basicSalary", "birthDate", "bonuses", "childrenCount", "createdAt", "deductions", "department", "email", "firstName", "gender", "hireDate", "id", "insurance", "jobLevel", "jobTitle", "lastName", "maritalStatus", "phone", "position", "updatedAt") SELECT "address", "allowances", "baseSalary", "basicSalary", "birthDate", "bonuses", "childrenCount", "createdAt", "deductions", "department", "email", "firstName", "gender", "hireDate", "id", "insurance", "jobLevel", "jobTitle", "lastName", "maritalStatus", "phone", "position", "updatedAt" FROM "Employee";
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
CREATE UNIQUE INDEX "Employee_phone_key" ON "Employee"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
