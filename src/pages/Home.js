import React from "react";
import PageContainer from "../components/PageContainer";
import job from "../assests/vectors/job2.svg";
const Home = () => {
  return (
    <PageContainer>
      <div className="flex gap-10">
        <img src={job} alt="job" className="w-1/3" />
        <div>
          <h1 className="text-3xl font-bold mb-4">
            مرحبا بك في برنامج إدارة الموظفين
          </h1>
          <p className="text-lg">
            يمكنك من خلال هذا البرنامج إدارة الموظفين والمستخدمين والصلاحيات بكل
            سهولة
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">أهم المميزات</h2>
            <ul className="list-disc list-inside">
              <li>إضافة موظف جديد</li>
              <li>تعديل موظف</li>
              <li>حذف موظف</li>
              <li>عرض جميع الموظفين</li>
              <li>عرض موظف بالاسم</li>
              <li>عرض موظف بالرقم الوظيفي</li>
              <li>ادارة المستخدمين</li>
              <li>ادارة الصلاحيات</li>
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
