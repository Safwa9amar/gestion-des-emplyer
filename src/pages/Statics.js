import React from "react";
import PageContainer from "../components/PageContainer";
import statistic from "../assests/images/statistic.jpg";
export default function Statics() {
  return (
    <PageContainer>
      <div className="mt-20 flex flex-col gap-5 items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-gray-800">الإحصائيات</h1>

        <img
          className="w-1/4 rounded-md aspect-square"
          src={statistic}
          alt="statistic"
        />
        <p className="text-gray-500">
          هذه الصفحة تحت الإنشاء وسيتم تفعيلها قريباً
        </p>
      </div>
    </PageContainer>
  );
}
