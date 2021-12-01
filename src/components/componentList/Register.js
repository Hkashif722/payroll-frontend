import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import axios from "axios";

export default function Register() {
  const userId = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  console.log(password);
  console.log(userId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const setUserId = userId.current.value;
    const setPassword = password.current.value;
    const setConfirmPassword = confirmPassword.current.value;
    if (setPassword === setConfirmPassword) {
      console.log(setUserId, setPassword);
      const userObj = {
        username: setUserId,
        password: setPassword,
      };
      axios
        .post("http://localhost:4000/register", userObj)
        .then((res) => console.log(res.data));
    } else {
      alert("Password does not match");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center ">
        <Card className="absolute top-52 w-80 ">
          <form onSubmit={handleSubmit} className="py-10" autoComplete="on">
            <CardContent className="space-y-10">
              <TextField
                inputRef={userId}
                name="userId"
                id="standard-basic"
                type="email"
                label="UserName"
              />
              <TextField
                inputRef={password}
                name="password"
                id="standard-basic"
                type="password"
                label="Password"
              />
              <TextField
                inputRef={confirmPassword}
                name="password"
                id="standard-basic"
                type="password"
                label="Confirm Password"
              />
            </CardContent>
            <CardActions className="relative -bottom-5">
              <Button variant="contained" type="submit" color="primary">
                Register
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    </div>
  );
}
