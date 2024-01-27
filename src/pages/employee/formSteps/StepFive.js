import React, { useEffect } from "react";
import calculateTotalSalary from "../../../utils/calculateTotalSalary";

export default function StepFive({
  salaryInfo,
  handleSalaryInfoChange,
  setActiveStep,
}) {
  useEffect(() => {
    setActiveStep(4);
  }, [setActiveStep]);
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">4. معلومات الراتب</h2>

      <div className="flex flex-col gap-10">
        {/* الراتب الأساسي */}
        <div className="mb-2">
          <label
            htmlFor="baseSalary"
            className="block text-sm font-medium text-gray-600"
          >
            الراتب الأساسي
          </label>
          <input
            type="number"
            id="baseSalary"
            name="baseSalary"
            value={salaryInfo.baseSalary}
            onChange={handleSalaryInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="أدخل الراتب الأساسي"
          />
        </div>

        {/* البدلات والمكافآت */}
        <div className="mb-2">
          <label
            htmlFor="allowances"
            className="block text-sm font-medium text-gray-600"
          >
            البدلات والمكافآت
          </label>
          <input
            type="number"
            id="allowances"
            name="allowances"
            value={salaryInfo.allowances}
            onChange={handleSalaryInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="أدخل البدلات والمكافآت"
          />
        </div>

        {/* الخصومات */}
        <div className="mb-2">
          <label
            htmlFor="deductions"
            className="block text-sm font-medium text-gray-600"
          >
            الخصومات
          </label>
          <input
            type="number"
            id="deductions"
            name="deductions"
            value={salaryInfo.deductions}
            onChange={handleSalaryInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="أدخل الخصومات"
          />
        </div>

        {/* إجمالي الراتب */}
        <div className="mb-2">
          <label
            htmlFor="totalSalary"
            className="block text-sm font-medium text-gray-600"
          >
            إجمالي الراتب
          </label>
          <input
            type="number"
            id="totalSalary"
            name="totalSalary"
            value={calculateTotalSalary(salaryInfo)}
            readOnly
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
