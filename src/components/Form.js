import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import SnackBar from "./componentList/SanckBar";

function Label({ label }) {
  return (
    <div className="ml-2 w-32 mt-1">
      <label id="emp_name">{label}</label>
    </div>
  );
}

const validate = (values) => {
  let errors = {};
  if (
    !/^[a-zA-Z]*$/g.test(
      values.emp_name ||
        values.emp_city ||
        values.emp_state ||
        values.grade_name
    )
  ) {
    alert("Invalid characters");
  }
};

export default function Form({
  initialValues,
  formikInputs,
  heading,
  Query,
  PQuery,
}) {
  const [triggerQuery, { data: Data, loading: Loading, error: Error }] =
    useMutation(Query);
  // console.log(data);
  // console.log(data);
  const [flag, setFlag] = useState();
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
      if (values.emp_id !== "") {
        triggerQuery({
          variables: values,
          refetchQueries: [{ query: PQuery }],
        });
        setFlag(true);
      } else {
        setFlag(false);
      }
    },
  });

  return (
    <div className="">
      <div className="lg:ml-4 max-w-3xl">
        <h1 className="text-2xl text-gray-500">{heading}</h1>
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
                    <SnackBar
                      button="SUBMIT"
                      msg={"Successful submit"}
                      fmsg="Error!"
                      alert={flag}
                    />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
