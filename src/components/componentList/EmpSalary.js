import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import DataTable from "../DataTable";

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
  ,
  {
    field: "emp_salary_date",
    sortable: false,
    editable: false,
    headerName: "EMPLOYEE SALARY DATE",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
  {
    field: "emp_salary_reimbursment_date",
    sortable: false,
    editable: false,
    headerName: "EMPLOYEE REIMBURSMENT DATE",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
  {
    field: "emp_dept_id",
    sortable: false,
    editable: false,
    headerName: "EMPLOYEE DEPT ID",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
  {
    field: "emp_grade_id",
    sortable: false,
    editable: false,
    headerName: "EMPLOYEE GRADE ID",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
  {
    field: "emp_bonus",
    sortable: false,
    editable: false,
    headerName: "EMPLOYEE BONUS",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
  {
    field: "emp_total_salary",
    sortable: false,
    editable: false,
    headerName: "EMPLOYEE TOTAL SALARY",
    headerClassName: "super-app-theme--header",
    width: 200,
  },
];

function EmpSalary() {
  const [id, setId] = useState([]);
  const [selectId, setSelectId] = useState();
  const Id = [];
  const [empReport, setEmpReport] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/emp-report", { emp_id: selectId })
      .then((res) => setEmpReport(res.data));
  };
  const rows = useMemo(
    () =>
      empReport &&
      empReport.map((data) => ({
        id: data.transaction_id,
        emp_id: data.emp_id,
        emp_salary_date: data.emp_salary_date,
        emp_salary_reimbursment_date: data.emp_salary_reimbursment_date,
        emp_dept_id: data.emp_dept_id,
        emp_grade_id: data.emp_grade_id,
        emp_basic_salary: data.emp_basic_salary,
        emp_bonus: data.emp_bonus,
        emp_total_salary: data.emp_total_salary,
      })),
    [empReport]
  );

  useEffect(async () => {
    axios
      .get("http://localhost:4000/emp-report")
      .then((res) => setId(res.data));
  }, []);
  console.log(empReport);
  console.log(selectId);
  return (
    <div className=" pb-96">
      <div>
        <h1 className=" text-lg text-gray-600">Employee grade details</h1>
        <form className="  bg-white p-5 mt-10 " onSubmit={handleSubmit}>
          <label for="cars">Employee Id:</label>
          <select
            className=" w-36 ml-5 border-b outline-none bg-transparent border-gray-400"
            id="cars"
            name="cars"
            onChange={(e) => setSelectId(e.target.value)}
          >
            {id.map((id) => (
              <option value={id.emp_id}>{id.emp_id}</option>
            ))}
          </select>

          <div className=" mt-5">
            <Button variant="contained" type="submit" color="primary">
              SEARCH
            </Button>
          </div>
        </form>
        <div className=" w-96  h-10 mt-10 mr-10 mb-16">
          {empReport && <DataTable rows={rows} columns={columns} />}
        </div>
      </div>
    </div>
  );
}

export default EmpSalary;
