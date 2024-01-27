import React, { useEffect } from "react";

export default function StepTwo({
  personalInfo,
  handlePersonalInfoChange,
  setActiveStep,
}) {
  useEffect(() => {
    setActiveStep(1);
  }, [setActiveStep]);
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">2. معلومات الاتصال</h2>
      <div className="flex flex-col gap-10">
        {/* البريد الإلكتروني */}
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            البريد الإلكتروني
          </label>
          <input
            dir="ltr"
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="أدخل البريد الإلكتروني"
          />
        </div>
        {/* رقم الهاتف */}
        <div className="mb-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            رقم الهاتف
          </label>
          <input
            dir="ltr"
            type="text"
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handlePersonalInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="أدخل رقم الهاتف"
          />
        </div>
        {/* العنوان */}
        <div className="mb-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            العنوان
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={personalInfo.address}
            onChange={handlePersonalInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="أدخل العنوان"
          />
        </div>
      </div>
    </div>
  );
}
