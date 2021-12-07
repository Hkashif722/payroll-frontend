import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function validate(values) {
  console.log(values);
  let error = {};
  if (!/^[a-zA-Z]*$/g.test(values)) {
    alert("Invalid characters");
    error = "Must be 15 characters or less";
  }
  return error;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  buttonLabel,
  depField,
  handleSubmit,
  event,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [deptId, setDeptId] = useState();
  const [deptName, setDeptName] = useState();

  return (
    <div>
      <button className="" onClick={handleOpen}>
        {buttonLabel}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-gray-500">{buttonLabel}</h1>
          <div className=" space-y-5">
            <label>Department ID:</label>
            <input
              onChange={(e) => setDeptId(e.target.value)}
              className="ml-3 border-b-2 outline-none border-gray-400"
              placeholder="Enter Department"
              type="number"
            />

            {depField && (
              <>
                <label>Department Name:</label>
                <input
                  onChange={(e) => setDeptName(e.target.value)}
                  className="ml-3 border-b-2 outline-none border-gray-400"
                  placeholder="Enter Department"
                  onChange={(e) => validate(e.target.value)}
                  type="text"
                />
              </>
            )}
          </div>
          <div className="space-x-5 mt-10">
            <button
              onClick={() =>
                event === "Add"
                  ? handleSubmit(deptId, deptName)
                  : handleSubmit(deptId)
              }
              className="bg-blue-500 px-5 transition transform ease-out focus:scale-95  text-white py-2 rounded-lg"
            >
              Ok
            </button>
            <button
              onClick={handleClose}
              className="bg-yellow-500 px-5 transition transform ease-out focus:scale-95 text-white py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
