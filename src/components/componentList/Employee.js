import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";
import { Add_Employee, ALL_EMPLOYEE } from "../query/dataBaseQuerry";
import Table from "../Table";

function Label({ label }) {
  return (
    <div className="ml-2 w-32 mt-1">
      <label id="emp_name">{label}</label>
    </div>
  );
}

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
  const { loading, error, data } = useQuery(ALL_EMPLOYEE);
  const [addEmployee, { data: Data, loading: Loading, error: Error }] =
    useMutation(Add_Employee);
  // console.log(data);
  const formik = useFormik({
    initialValues: {
      emp_id: "",
      emp_name: "",
      emp_dob: "",
      emp_doj: "",
      emp_city: "",
      emp_pincode: "",
      emp_mobile_no: "",
      emp_state: "",
      emp_mail_id: "",
    },
    onSubmit: (values) => {
      console.log(values);
      addEmployee({
        variables: values,
        refetchQueries: [{ query: ALL_EMPLOYEE }],
      });
    },
  });

  return (
    <div className="ml-16">
      <div className="lg:ml-4 max-w-3xl">
        <h1 className="text-2xl text-gray-500">Employee Details</h1>
        <div className="mt-10">
          <Card className="" variant="outlined">
            <CardContent>
              <form onSubmit={formik.handleSubmit}>
                <div className=" grid  sm:grid-cols-2 gap-14">
                  {formikInputs.map((val, index) => (
                    <div key={index}>
                      <Label label={val.lable} />
                      <input
                        className=" text-base appearance-none bg-transparent border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type={val.type}
                        id={val.value}
                        name={val.value}
                        onChange={formik.handleChange}
                        value={`${formik.values[val.value]}`}
                        placeholder={val.lable}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button variant="contained" type="submit" color="primary">
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="p-5 mb-16">{data && <Table Data={data.employee} />}</div>
    </div>
  );
}
