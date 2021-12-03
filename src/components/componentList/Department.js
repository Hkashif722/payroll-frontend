import React, { useMemo } from "react";
import Modal from "../BasicModal";
import DataTable from "../DataTable";
import { useMutation, useQuery } from "@apollo/client";
import {
  DEPARTMENT,
  ADD_DEPARTMENT,
  DELETE_DEPARTMENT,
} from "../query/dataBaseQuerry";

const columns = [
  {
    field: "id",
    sortable: false,
    editable: false,
    headerName: "DEPARTMENT ID",
    headerClassName: "super-app-theme--header",
    width: 250,
  },
  {
    field: "dept_name",
    sortable: false,
    editable: false,
    headerName: "DEPARTMENT NAME",
    headerClassName: "super-app-theme--header",
    width: 250,
  },
];

function Department() {
  const { loading, error, data } = useQuery(DEPARTMENT);
  const [addDepartment, { loading: Loading, error: Error, data: Data }] =
    useMutation(ADD_DEPARTMENT);
  const [deleteDepartment, { loading: Loading1, error: Error1, data: Data1 }] =
    useMutation(DELETE_DEPARTMENT);
  const rows = useMemo(
    () =>
      data &&
      data.department.map((data) => ({
        id: data.dept_id,
        dept_name: data.dept_name,
      })),
    [data]
  );

  const handleSubmit1 = (deptId, deptname) => {
    console.log(deptId, deptname);
    const value = {
      dept_id: parseInt(deptId),
      dept_name: deptname,
    };
    if (deptId !== "" && deptname !== "") {
      addDepartment({
        variables: value,
        refetchQueries: [{ query: DEPARTMENT }],
      });
    }
  };
  const handleSubmit2 = (data1) => {
    // console.log(data);
    const value = {
      dept_id: parseInt(data1),
    };
    console.log(data1);
    if (value.dept_id !== "") {
      deleteDepartment({
        variables: value,
        refetchQueries: [{ query: DEPARTMENT }],
      });
    }
  };
  return (
    <div>
      <header className="text-lg text-gray-600">Department Details</header>
      <div className="flex space-x-10 mt-10">
        <div onClick={() => console.log("got clicked")} className="cusbtn">
          <Modal
            buttonLabel="ADD DEPARTMENT"
            depField={true}
            event="Add"
            handleSubmit={handleSubmit1}
          />
        </div>
        <div className="cusbtn">
          <Modal
            buttonLabel="DELETE DEPARTMENT"
            depField={false}
            event="Del"
            handleSubmit={handleSubmit2}
          />
        </div>
      </div>
      <div className=" mt-10 mr-10 mb-16">
        {data && <DataTable rows={rows} columns={columns} col="2" />}
      </div>
    </div>
  );
}

export default Department;
