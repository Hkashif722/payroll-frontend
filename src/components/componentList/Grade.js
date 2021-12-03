import React, { useMemo } from "react";
import Form from "../Form";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_GRADE, GRADE_DETAILS } from "../query/dataBaseQuerry";
import DataTable from "../DataTable";

// forms input

const formikInputs = [
  {
    value: "grade_id",
    type: "number",
    lable: "GRADE ID:",
  },
  {
    value: "grade_name",
    type: "text",
    lable: "GRADE NAME:",
  },
  {
    value: "grade_basic_salary",
    type: "number",
    lable: "GRADE SALARY",
  },
  {
    value: "grade_bonus",
    type: "number",
    lable: "GRADE BONUS:",
  },
];

const initialValues = {
  grade_id: "",
  grade_name: "",
  grade_basic_salary: "",
  grade_bonus: "",
};

// for table
const columns = [
  {
    field: "id",
    sortable: false,
    editable: false,
    headerName: "GRADE ID",
    headerClassName: "super-app-theme--header",
    width: 150,
  },
  {
    field: "grade_name",
    headerName: "GRADE NAME",
    sortable: false,
    editable: false,
    headerClassName: "super-app-theme--header",
    textAlign: "center",
    width: 180,
  },

  {
    field: "grade_basic_salary",
    headerName: "GRADE SALARY",
    width: 180,
    headerClassName: "super-app-theme--header",
    editable: false,
    sortable: false,
  },
  {
    field: "grade_bonus",
    headerName: "GRADE BONUS",
    headerClassName: "super-app-theme--header",
    width: 280,
    editable: false,
    sortable: false,
  },
];

function Grade() {
  const { loading, error, data: Data } = useQuery(GRADE_DETAILS);
  console.log(Data);

  const rows = useMemo(
    () =>
      Data &&
      Data.grade.map((data) => ({
        id: data.grade_id,
        grade_name: data.grade_name,
        grade_basic_salary: data.grade_basic_salary,
        grade_bonus: data.grade_bonus,
      })),
    [Data]
  );
  return (
    <div>
      <Form
        initialValues={initialValues}
        formikInputs={formikInputs}
        heading="Grade Details"
        Query={ADD_GRADE}
        PQuery={GRADE_DETAILS}
      />
      <div className=" mt-10 mr-10 mb-16">
        {Data && <DataTable rows={rows} columns={columns} col="2" />}
      </div>
    </div>
  );
}

export default Grade;
