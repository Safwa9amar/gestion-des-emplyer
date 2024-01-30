import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import DataTable from "react-data-table-component";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";

export default function UsersList() {
  const fakeData = Array.from({ length: 100 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.finance.amount(),
    role: faker.person.jobTitle(),
  }));
  const [User, setUser] = useState([]);
  const [filtredUser, setFiltredUser] = useState(fakeData);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/users`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users);
        setFiltredUser(data.users);
      });
  }, []);

  const filterData = (e) => {
    const value = e.target.value.toLowerCase();
    const filter = filtredUser.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(value) ||
        user.lastName.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value) ||
        user.phone.toLowerCase().includes(value) ||
        user.role.toLowerCase().includes(value)
      );
    });
    setFiltredUser(filter);
    e.target.value === "" && setFiltredUser(User);
  };
  const resetFilter = () => {
    setFiltredUser(User);
    toast.success("تم إعادة تعيين الفلترة");
  };
  // delete row from table
  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/User/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        let confirm = window.confirm("هل أنت متأكد من حذف الموظف؟");
        if (confirm) {
          toast.success("تم حذف الموظف بنجاح");
        }
        setUser(User.filter((user) => user.id !== id));
        setFiltredUser(filtredUser.filter((user) => user.id !== id));
      } else {
        toast.error("حدث خطأ ما");
      }
    });
  };

  return (
    <PageContainer>
      <div className="flex flex-col gap-5 md:w-11/12 mx-10 mt-20">
        <DataTable
          title={
            <div className="flex flex-row justify-between p-4 ">
              <h1 className="text-3xl font-bold text-gray-800">
                قائمة المستخدمين
              </h1>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="ابحث عن مستخدم"
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
              selector: (row) => row.fullName,
              sortable: true,
              // width: "15%",
            },
            {
              name: "البريد الالكتروني",
              selector: (row) => row.email,
              sortable: true,
              // width: "15%",
            },
            {
              name: "رقم الهاتف",
              selector: (row) => row.phone,
              sortable: true,
              // width: "15%",
            },
            {
              name: "الدور",
              selector: (row) => row.role,
              sortable: true,
              // width: "15%",
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
                    onClick={() => handleDelete(row.id)}
                    className="text-red-500 text-3xl"
                  />
                </div>
              ),
            },
          ]}
          data={filtredUser?.map((user) => ({
            ...user,
            id: user.id,
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
