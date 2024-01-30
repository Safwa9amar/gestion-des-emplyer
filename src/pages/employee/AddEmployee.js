import React from "react";
import PageContainer from "../../components/PageContainer";
import EmployeeForm from "./EmployeeForm";

export default function AddEmployee({ edit }) {
  return (
    <PageContainer>
      <EmployeeForm edit={edit} />
    </PageContainer>
  );
}
