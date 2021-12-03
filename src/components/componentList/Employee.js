import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";
import { Add_Employee, ALL_EMPLOYEE } from "../query/dataBaseQuerry";
import DataTable from "../DataTable";
import SnackBar from "./SanckBar";
import Form from "../Form";

// function Label({ label }) {
//   return (
//     <div className="ml-2 w-32 mt-1">
//       <label id="emp_name">{label}</label>
//     </div>
//   );
// }

const columns = [
  {
    field: "id",
    sortable: false,
    editable: false,
    headerName: "EMPLOYEE ID",
    headerClassName: "super-app-theme--header",
    width: 150,
  },
  {
    field: "emp_name",
    headerName: "EMPLOYEE NAME",
    sortable: false,
    editable: false,
    headerClassName: "super-app-theme--header",
    textAlign: "center",
    width: 180,
  },

  {
    field: "emp_dob",
    headerName: "EMPLOYEE DOB",
    width: 180,
    headerClassName: "super-app-theme--header",
    editable: false,
    sortable: false,
  },
  {
    field: "emp_doj",
    headerName: "EMPLOYEE DOJ",
    headerClassName: "super-app-theme--header",
    width: 170,
    editable: false,
    sortable: false,
  },
  {
    field: "emp_pincode",
    headerName: "EMPLOYEE PINCODE",
    width: 180,
    editable: false,
    headerClassName: "super-app-theme--header",
    sortable: false,
  },
  {
    field: "emp_city",
    headerName: "EMPLOYEE CITY",
    width: 170,
    editable: false,
    headerClassName: "super-app-theme--header",
    sortable: false,
  },
  {
    field: "emp_mobile_no",
    headerName: "EMPLOYEE MOB",
    width: 170,
    editable: false,
    headerClassName: "super-app-theme--header",
    sortable: false,
  },
  {
    field: "emp_state",
    headerName: "EMPLOYEE STATE",
    width: 180,
    headerClassName: "super-app-theme--header",
    editable: false,
    sortable: false,
  },
  {
    field: "emp_mail_id",
    headerName: "EMPLOYEE MAILID",
    width: 190,
    headerClassName: "super-app-theme--header",
    editable: false,
    sortable: false,
  },
];
//

const formikInputs = [
  {
    value: "emp_id",
    type: "number",
    lable: "EMP ID:",
  },
  {
    value: "emp_name",
    type: "text",
    lable: "EMP NAME:",
  },
  {
    value: "emp_dob",
    type: "text",
    lable: "EMP DOB:",
  },
  {
    value: "emp_doj",
    type: "text",
    lable: "EMP DOJ:",
  },
  {
    value: "emp_city",
    type: "text",
    lable: "EMP CITY:",
  },
  {
    value: "emp_pincode",
    type: "text",
    lable: "EMP PIN:",
  },
  {
    value: "emp_mobile_no",
    type: "number",
    lable: "EMP MOB:",
  },
  {
    value: "emp_state",
    type: "text",
    lable: "EMP STATE:",
  },
  {
    value: "emp_mail_id",
    type: "email",
    lable: "EMP EMAILID:",
  },
];

export default function Employee() {
  const { loading, error, data: Data } = useQuery(ALL_EMPLOYEE);
  console.log(Data);
  // console.log(data);

  const rows = React.useMemo(
    () =>
      Data &&
      Data.employee.map((data) => ({
        id: data.emp_id,
        emp_name: data.emp_name,
        emp_dob: data.emp_dob,
        emp_doj: data.emp_doj,
        emp_city: data.emp_city,
        emp_pincode: data.emp_pincode,
        emp_mobile_no: data.emp_mobile_no,
        emp_state: data.emp_state,
        emp_mail_id: data.emp_mail_id,
      })),
    [Data]
  );
  const initialValues = {
    emp_id: "",
    emp_name: "",
    emp_dob: "",
    emp_doj: "",
    emp_city: "",
    emp_pincode: "",
    emp_mobile_no: "",
    emp_state: "",
    emp_mail_id: "",
  };

  return (
    <div className="">
      <Form
        initialValues={initialValues}
        Query={Add_Employee}
        PQuery={ALL_EMPLOYEE}
      />
      <div className=" mt-10 mr-10 mb-16">
        {Data && <DataTable rows={rows} columns={columns} />}
      </div>
    </div>
  );
}
