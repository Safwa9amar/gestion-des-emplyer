import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import { useParams } from "react-router-dom";
import PayrollTable from "./PayrollTable";
import { FaPrint } from "react-icons/fa";

export default function Payroll() {
  const [payroll, setPayroll] = useState(null);
  const [employee, setEmployee] = useState({});
  const { id: employeeId } = useParams(); // Get the employeeId from the route parameters
  const tableRef = React.createRef();
  useEffect(() => {
    // Fetch payroll information based on the employeeId
    const fetchPayroll = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/employees/${employeeId}/payroll`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        ); // Adjust the API endpoint accordingly
        const data = await response.json();
        console.log(data);
        setPayroll(true); // Assuming your API returns a payroll object
      } catch (error) {
        console.error("Error fetching payroll:", error);
      }
    };

    const fetchEmployee = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/employees/${employeeId}`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();
        console.log(data);
        setEmployee(data.employee);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    fetchPayroll();
    fetchEmployee();
  }, [employeeId]);
  return (
    <PageContainer>
      {payroll && employee ? (
        <div dir="ltr" className="mt-20">
          <div className="flex w-full items-center justify-between bg-slate-400 p-5 text-white">
            <h1 className="text-2xl">Fiche de paie</h1>
            <FaPrint
              onClick={() => {
                window.print();
              }}
              className="text-3xl"
            />
          </div>

          <PayrollTable
            tableRef={tableRef}
            employee={employee}
            payroll={payroll}
          />
        </div>
      ) : (
        <p>Loading payroll information for employee with ID: {employeeId}</p>
      )}
    </PageContainer>
  );
}
