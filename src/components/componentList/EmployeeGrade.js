import { useQuery } from "@apollo/client";
import React, { useMemo } from "react";
import DataTable from "../DataTable";
import Form from "../Form";
import { EMPLOYEE_GRADE, ADD_EMP_GRADE_DETAILS } from "../query/dataBaseQuerry";

//Table columns

const columns = [
  {
    field: "id",
    sortable: false,
    editable: false,
    headerName: "TRANSACTION ID",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
  {
    field: "emp_id",
    sortable: false,
    editable: false,
    headerName: "EMPLOYEE ID",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
  {
    field: "emp_dept_id",
    sortable: false,
    editable: false,
    headerName: "EMP-DEPT ID",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
  {
    field: "emp_grade_id",
    sortable: false,
    editable: false,
    headerName: "EMP-GRADE ID",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
  {
    field: "emp_from_date",
    sortable: false,
    editable: false,
    headerName: "DATE FROM",
    headerClassName: "super-app-theme--header",
    width: 215,
  },
  {
    field: "emp_to_date",
    sortable: false,
    editable: false,
    headerName: "DATE TO",
    headerClassName: "super-app-theme--header",
    width: 215,
  },
];

//form input

const formikInputs = [
  {
    value: "transaction_id",
    type: "number",
    lable: "TRANSACTION ID:",
  },
  {
    value: "emp_id",
    type: "number",
    lable: "EMPLOYEE ID:",
  },
  {
    value: "emp_dept_id",
    type: "number",
    lable: "DEPARTMENT ID:",
  },
  {
    value: "emp_grade_id",
    type: "number",
    lable: "EPM GRADE ID:",
  },
  {
    value: "emp_from_date",
    type: "text",
    lable: "FROM DATE",
  },
  {
    value: "emp_to_date",
    type: "text",
    lable: "TO DATE:",
  },
];

const initialValues = {
  transaction_id: "",
  emp_id: "",
  emp_dept_id: "",
  emp_grade_id: "",
  emp_from_date: "",
  emp_to_date: "",
};

function EmployeeGrade() {
  const { loading, error, data: Data } = useQuery(EMPLOYEE_GRADE);
  const rows = useMemo(
    () =>
      Data &&
      Data.employee_Grade.map((data) => ({
        id: data.transaction_id,
        emp_id: data.emp_id,
        emp_dept_id: data.emp_dept_id,
        emp_grade_id: data.emp_grade_id,
        emp_from_date: data.emp_from_date,
        emp_to_date: data.emp_to_date,
      })),
    [Data]
  );
  return (
    <div className="">
      <Form
        initialValues={initialValues}
        formikInputs={formikInputs}
        heading="Employee Grade Details"
        Query={ADD_EMP_GRADE_DETAILS}
        PQuery={EMPLOYEE_GRADE}
      />
      <div className=" mt-10 mr-10 mb-16">
        {Data && <DataTable rows={rows} columns={columns} />}
      </div>
    </div>
  );
}

export default EmployeeGrade;
