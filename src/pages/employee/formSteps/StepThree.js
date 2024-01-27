import React, { useEffect } from "react";

export default function StepThree({
  socialInfo,
  handleSocialInfoChange,
  setActiveStep,
}) {
  useEffect(() => {
    setActiveStep(2);
  }, [setActiveStep]);
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">2. المعلومات الاجتماعية</h2>
      <div className="flex flex-col gap-10">
        {/* الوضعية الاجتماعية */}
        <div className="mb-2">
          <label
            htmlFor="socialStatus"
            className="block text-sm font-medium text-gray-600"
          >
            الوضعية الاجتماعية
          </label>
          <select
            id="socialStatus"
            name="socialStatus"
            value={socialInfo.socialStatus}
            onChange={handleSocialInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="single">أعزب</option>
            <option value="married">متزوج</option>
            <option value="divorced">مطلق</option>
            {/* إضافة المزيد من الخيارات حسب الحاجة */}
          </select>
        </div>

        {/* عدد الأطفال */}
        <div className="mb-2">
          <label
            htmlFor="childrenCount"
            className="block text-sm font-medium text-gray-600"
          >
            عدد الأطفال
          </label>
          <input
            type="number"
            id="childrenCount"
            name="childrenCount"
            value={socialInfo.childrenCount}
            onChange={handleSocialInfoChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="أدخل عدد الأطفال"
          />
        </div>
      </div>
    </div>
  );
}
