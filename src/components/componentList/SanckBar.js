import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return (
    <MuiAlert className="-ml-96" elevation={6} variant="filled" {...props} />
  );
}

export default function SnackBar(props) {
  console.log(props);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="text-white">
      <p onClick={handleClick}>{props.button}</p>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {props.alert ? (
          <Alert onClose={handleClose} severity="success">
            {props.msg}
          </Alert>
        ) : (
          <Alert severity="error">{props.fmsg}</Alert>
        )}
      </Snackbar>
    </div>
  );
}
