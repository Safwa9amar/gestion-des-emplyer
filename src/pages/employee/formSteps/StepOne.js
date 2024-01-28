import React, { useEffect } from "react";

export default function StepOne({
  personalInfo,
  handlePersonalInfoChange,
  setActiveStep,
}) {
  useEffect(() => {
    setActiveStep(0);
  }, [setActiveStep]);

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">1. المعلومات الشخصية</h2>
      <div className="flex flex-col gap-10">
        {/* اسم العائلة */}
        <div className="mb-2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-600"
          >
            اسم العائلة
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handlePersonalInfoChange}
            className={`mt-1 p-2 w-full border rounded-md `}
            placeholder="أدخل اسم العائلة"
          />
        </div>

        {/* الاسم الشخصي */}
        <div className="mb-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-600"
          >
            الاسم الشخصي
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handlePersonalInfoChange}
            className={`mt-1 p-2 w-full border rounded-md `}
            placeholder="أدخل الاسم الشخصي"
          />
        </div>

        {/* تاريخ الميلاد */}
        <div className="mb-2">
          <label
            htmlFor="birthDate"
            className="block text-sm font-medium text-gray-600"
          >
            تاريخ الميلاد
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={personalInfo.birthDate}
            onChange={handlePersonalInfoChange}
            className={`mt-1 p-2 w-full border rounded-md  `}
          />
        </div>

        {/* جنس الموظف */}
        <div className="mb-2">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-600"
          >
            جنس الموظف
          </label>
          <select
            id="gender"
            name="gender"
            value={personalInfo.gender}
            onChange={handlePersonalInfoChange}
            className={`mt-1 p-2 w-full border rounded-md  `}
          >
            <option value="">اختر</option>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
          </select>
        </div>
      </div>
    </div>
  );
}
