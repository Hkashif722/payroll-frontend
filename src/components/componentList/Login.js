import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import axios from "axios";
import SnackBar from "./SanckBar";

export default function Login() {
  const userId = useRef();
  const password = useRef();
  const [alertStatus, setAlertStatus] = useState();
  console.log(password);
  console.log(userId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const setUserId = userId.current.value;
    const setPassword = password.current.value;
    console.log(setUserId, setPassword);
    const userObj = {
      username: setUserId,
      password: setPassword,
    };
    axios.post("http://localhost:4000/login", userObj).then((res) => {
      console.log(res.data);
      if (!res.data.token) {
        setAlertStatus(false);
      } else {
        localStorage.setItem("tocken", res.data.token);
        setAlertStatus(true);
      }
    });
  };

  return (
    <div className="w-ful  h-full">
      <div className="flex justify-center ">
        <Card className=" h-96 absolute top-52 w-80 ">
          <form
            onSubmit={handleSubmit}
            className="pt-10 pb-32 "
            autoComplete="on"
          >
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
            </CardContent>
            <CardActions className="relative -bottom-5">
              <Button variant="contained" type="submit" color="primary">
                <SnackBar button="LOGIN" alert={alertStatus} />
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    </div>
  );
}
