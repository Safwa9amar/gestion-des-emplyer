import React, { useEffect, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

export default function StepOne({
  personalInfo,
  handlePersonalInfoChange,
  setActiveStep,
}) {
  const [errors, setErrors] = useState({
    lastName: "",
    firstName: "",
    birthDate: "",
    gender: "",
  });

  useEffect(() => {
    setActiveStep(0);
  }, [setActiveStep]);

  const validateInput = () => {
    let isValid = true;
    const newErrors = {
      lastName: "",
      firstName: "",
      birthDate: "",
      gender: "",
    };

    // Validate Last Name
    if (personalInfo.lastName.trim() === "") {
      newErrors.lastName = "يرجى إدخال اسم العائلة";
      isValid = false;
    }

    // Validate First Name
    if (personalInfo.firstName.trim() === "") {
      newErrors.firstName = "يرجى إدخال الاسم الشخصي";
      isValid = false;
    }

    // Validate Birth Date
    if (!personalInfo.birthDate) {
      newErrors.birthDate = "يرجى إدخال تاريخ الميلاد";
      isValid = false;
    }

    // Validate Gender
    if (!personalInfo.gender) {
      newErrors.gender = "يرجى اختيار جنس الموظف";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateInput()) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

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
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.lastName && "border-red-500"
            }`}
            placeholder="أدخل اسم العائلة"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
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
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.firstName && "border-red-500"
            }`}
            placeholder="أدخل الاسم الشخصي"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
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
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.birthDate && "border-red-500"
            }`}
          />
          {errors.birthDate && (
            <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>
          )}
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
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.gender && "border-red-500"
            }`}
          >
            <option value="">اختر</option>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
          )}
        </div>
      </div>
    </div>
  );
}
