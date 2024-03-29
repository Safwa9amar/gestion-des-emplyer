import React, { useEffect, useRef, useState } from "react";
import MultiStep from "react-multistep";
import StepOne from "./formSteps/StepOne";
import StepTwo from "./formSteps/StepTwo";
import StepThree from "./formSteps/StepThree";
import StepFive from "./formSteps/StepFive";
import StepFour from "./formSteps/StepFour";
import { FaRegSave } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";
import { toast } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";
import ImageUpload from "./formSteps/FinalStep";
const EmployeeForm = ({ edit }) => {
  // chek if the form is for edit or add new employee
  const navigation = useLocation();
  // const EmployeeId = navigation.pathname.split("/")[2];
  const { id: EmployeeId } = useParams();
  const formRef = useRef(null);

  // const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (edit) {
      // setEdit(true);
      try {
        fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/employees/${EmployeeId}`,

          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        )
          .then((res) => {
            if (res.status === 401) {
              navigation.pathname = "/login";
              return;
            }
            return res;
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.employee === null) {
              // set error page
              navigation.pathname = "/error";
              return;
            }
            setPersonalInfo({
              firstName: data.employee.firstName,
              lastName: data.employee.lastName,
              email: data.employee.email,
              phone: data.employee.phone,
              birthDate: data.employee.birthDate,
              gender: data.employee.gender,
              address: data.employee.address,
            });
            setSocialInfo({
              maritalStatus: data.employee.maritalStatus,
              childrenCount: data.employee.childrenCount,
            });
            setAdministrativeInfo({
              jobTitle: data.employee.jobTitle,
              hireDate: data.employee.hireDate,
              department: data.employee.department,
              position: data.employee.position,
            });
            setSalaryInfo({
              baseSalary: data.employee.baseSalary,
              bonuses: data.employee.bonuses,
              allowances: data.employee.allowances,
              deductions: data.employee.deductions,
            });
            setProfileImg(data.employee.picture);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [EmployeeId]);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    // أضف حقول المعلومات الشخصية الأخرى
  });

  const [socialInfo, setSocialInfo] = useState({
    maritalStatus: "",
    // أضف حقول المعلومات الاجتماعية الأخرى
  });

  const [administrativeInfo, setAdministrativeInfo] = useState({
    department: "",
    position: "",
    // أضف حقول المعلومات الإدارية الأخرى
  });

  const [salaryInfo, setSalaryInfo] = useState({
    basicSalary: 0,
    bonuses: 0,
    // أضف حقول معلومات الراتب الأخرى
  });

  const [compensationInfo] = useState({
    insurance: false,
    // أضف حقول معلومات التعويض الأخرى
  });

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSocialInfoChange = (e) => {
    setSocialInfo({
      ...socialInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdministrativeInfoChange = (e) => {
    setAdministrativeInfo({
      ...administrativeInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSalaryInfoChange = (e) => {
    setSalaryInfo({
      ...salaryInfo,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const [profileImg, setProfileImg] = useState(null);

  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      component: (
        <StepOne
          setActiveStep={setActiveStep}
          personalInfo={personalInfo}
          handlePersonalInfoChange={handlePersonalInfoChange}
        />
      ),
    },
    {
      component: (
        <StepTwo
          setActiveStep={setActiveStep}
          personalInfo={personalInfo}
          handlePersonalInfoChange={handlePersonalInfoChange}
        />
      ),
    },
    {
      component: (
        <StepThree
          setActiveStep={setActiveStep}
          socialInfo={socialInfo}
          handleSocialInfoChange={handleSocialInfoChange}
        />
      ),
    },
    {
      component: (
        <StepFour
          setActiveStep={setActiveStep}
          administrativeInfo={administrativeInfo}
          handleAdministrativeInfoChange={handleAdministrativeInfoChange}
        />
      ),
    },
    {
      component: (
        <StepFive
          setActiveStep={setActiveStep}
          salaryInfo={salaryInfo}
          handleSalaryInfoChange={handleSalaryInfoChange}
        />
      ),
    },
    {
      component: (
        <ImageUpload
          setActiveStep={setActiveStep}
          onImageSelect={setProfileImg}
          profileImg={profileImg}
        />
      ),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...personalInfo,
      ...socialInfo,
      ...administrativeInfo,
      ...salaryInfo,
      ...compensationInfo,
    };
    // check if the form is for edit or add new employee
    if (edit) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/api/employees/${EmployeeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      })
        .then(async (res) => {
          const data = await res.json();
          console.log(data.error);
          toast.promise(
            new Promise((resolve, reject) => {
              if (res.ok) {
                resolve(data);
                // send the image to the server
                const formData = new FormData();
                formData.append("image", profileImg);
                formData.append("employeeId", EmployeeId);
                fetch(`${process.env.REACT_APP_SERVER_URL}/api/upload`, {
                  method: "POST",
                  headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                  },
                  body: formData,
                })
                  .then(async (res) => {
                    const data = await res.json();
                    console.log(data);
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.error(err.message);
                  });
              } else {
                reject(data);
              }
            }),
            {
              pending: "جاري الإرسال...",
              success: "تم إرسال البيانات بنجاح",
              error:
                typeof data.error === "object" ? data.error[0].msg : data.error,
            }
          );
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
      return;
    }

    fetch(`${process.env.REACT_APP_SERVER_URL}/api/add_employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data.error);
        toast.promise(
          new Promise((resolve, reject) => {
            if (res.ok) {
              resolve(data);
            } else {
              reject(data);
            }
          }),
          {
            pending: "جاري الإرسال...",
            success: "تم إرسال البيانات بنجاح",
            error:
              typeof data.error === "object" ? data.error[0].msg : data.error,
          }
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
      .finally(() => {
        formRef.current.reset();
      });
  };
  return (
    <form
      ref={formRef}
      onSubmit={(e) => e.preventDefault()}
      className="p-4 bg-white shadow-md rounded-md w-full mx-20 mb-10 mt-32"
    >
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">نموذج معلومات الموظف</h1>
        {/* زر الإرسال */}
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-outline btn-accent  "
        >
          <FaRegSave className="inline-block mr-2" />
          حفظ
        </button>
      </div>
      <MultiStep
        // showNavigation={activeStep}
        nextButton={{
          title: <FcPrevious className="text-3xl m-5  " />,
        }}
        prevButton={{
          title: <FcNext className="text-3xl m-5 " />,
        }}
        steps={steps}
        activeStep={activeStep}
      />
    </form>
  );
};

export default EmployeeForm;
