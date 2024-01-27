import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import DataTable from "react-data-table-component";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function EmloyeeList() {
  const [employees, setEmployees] = useState([]);
  const [filtredEmployees, setFiltredEmployees] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/employees`)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data.employees);
        setFiltredEmployees(data.employees);
      });
    console.log();
  }, []);

  const filterData = (e) => {
    const value = e.target.value.toLowerCase();
    const filter = filtredEmployees.filter((employee) => {
      return (
        employee.firstName.toLowerCase().includes(value) ||
        employee.lastName.toLowerCase().includes(value) ||
        employee.email.toLowerCase().includes(value) ||
        employee.phone.toLowerCase().includes(value) ||
        employee.jobTitle.toLowerCase().includes(value) ||
        employee.department.toLowerCase().includes(value) ||
        employee.jobLevel.toLowerCase().includes(value)
      );
    });
    setFiltredEmployees(filter);
    e.target.value === "" && setFiltredEmployees(employees);
  };
  const resetFilter = () => {
    setFiltredEmployees(employees);
    toast.success("تم إعادة تعيين الفلترة");
  };

  return (
    <PageContainer>
      <div className="flex flex-col gap-5  mx-10">
        <DataTable
          title={
            <div className="flex flex-row justify-between p-4 ">
              <h1 className="text-3xl font-bold text-gray-800">
                قائمة الموظفين
              </h1>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="ابحث عن موظف"
                  className="text-sm p-2 border border-gray-500 rounded-md"
                  onChange={filterData}
                />
                <GrPowerReset
                  className="text-green-500 text-3xl cursor-pointer ml-2"
                  onClick={resetFilter}
                />
              </div>
            </div>
          }
          columns={[
            {
              name: "الاسم",
              selector: (row) => row.firstName + " " + row.lastName,
              sortable: true,
              width: "15%",
            },
            {
              name: "البريد الالكتروني",
              selector: (row) => row.email,
              sortable: true,
              width: "15%",
            },
            {
              name: "رقم الهاتف",
              selector: (row) => row.phone,
              sortable: true,
              width: "15%",
            },
            {
              name: "الوظيفة",
              selector: (row) => row.jobTitle,
              sortable: true,
              width: "15%",
            },
            {
              name: "القسم",
              selector: (row) => row.department,
              sortable: true,
              width: "15%",
            },
            {
              name: "المستوى الوظيفي",
              selector: (row) => row.jobLevel,
              sortable: true,
              width: "15%",
            },
            // options
            {
              name: "الخيارات",
              cell: (row) => (
                <div className="flex flex-row gap-2">
                  <Link to={`/Add?edit=${row.id}`}>
                    <CiEdit className="text-blue-500 text-3xl" />{" "}
                  </Link>
                  <MdOutlineDeleteForever
                    onClick={() => {
                      fetch(
                        `${process.env.REACT_APP_SERVER_URL}/api/employees/${row.id}`,
                        {
                          method: "DELETE",
                        }
                      )
                        .then((res) => res.json())
                        .then((data) => {
                          if (data.success) {
                            toast.success("تم حذف الموظف بنجاح");
                            setEmployees(
                              employees.filter(
                                (employee) => employee.id !== row.id
                              )
                            );
                            setFiltredEmployees(
                              filtredEmployees.filter(
                                (employee) => employee.id !== row.id
                              )
                            );
                          } else {
                            toast.error("حدث خطأ أثناء حذف الموظف");
                          }
                        });
                    }}
                    className="text-red-500 text-3xl"
                  />
                </div>
              ),
            },
          ]}
          data={filtredEmployees.map((employee) => ({
            ...employee,
            id: employee.id,
          }))}
          pagination={true}
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          paginationComponentOptions={{
            rowsPerPageText: "الصفوف في الصفحة",
            rangeSeparatorText: "من",
            noRowsPerPage: false,
            selectAllRowsItem: false,
            selectAllRowsItemText: "الكل",
          }}
          noDataComponent="لا يوجد موظفين"
          striped={true}
          highlightOnHover={true}
          pointerOnHover={true}
          responsive={true}
          direction="rtl"
        />
      </div>
    </PageContainer>
  );
}
