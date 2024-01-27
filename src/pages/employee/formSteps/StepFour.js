import React, { useEffect } from "react";

export default function StepFour({
  administrativeInfo,
  handleAdministrativeInfoChange,
  setActiveStep,
}) {
  useEffect(() => {
    setActiveStep(3);
  }, [setActiveStep]);
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">3. المعلومات الإدارية</h2>
      <div className="flex flex-col gap-10">
        {/* المسمى الوظيفي */}
        <div className="mb-2">
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-600"
          >
            المسمى الوظيفي
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={administrativeInfo.jobTitle}
            onChange={handleAdministrativeInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="أدخل المسمى الوظيفي"
          />
        </div>

        {/* القسم / الإدارة */}
        <div className="mb-2">
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-600"
          >
            القسم / الإدارة
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={administrativeInfo.department}
            onChange={handleAdministrativeInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="أدخل القسم أو الإدارة"
          />
        </div>

        {/* تاريخ التعيين */}
        <div className="mb-2">
          <label
            htmlFor="hireDate"
            className="block text-sm font-medium text-gray-600"
          >
            تاريخ التعيين
          </label>
          <input
            type="date"
            id="hireDate"
            name="hireDate"
            value={administrativeInfo.hireDate}
            onChange={handleAdministrativeInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* المستوى الوظيفي */}
        <div className="mb-2">
          <label
            htmlFor="jobLevel"
            className="block text-sm font-medium text-gray-600"
          >
            المستوى الوظيفي
          </label>
          <select
            id="jobLevel"
            name="jobLevel"
            value={administrativeInfo.jobLevel}
            onChange={handleAdministrativeInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="junior">مبتدئ</option>
            <option value="mid">متوسط</option>
            <option value="senior">محترف</option>
          </select>
        </div>
      </div>
    </div>
  );
}
