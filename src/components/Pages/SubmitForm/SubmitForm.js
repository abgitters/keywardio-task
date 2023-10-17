import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  width: 400,
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const SubmitForm = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
      navigate("/add-type");
    }, 600);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <Modal open={open}>
      <Box sx={style}>
        <IconButton color="primary" aria-label="done">
          <Fab color="primary" aria-label="add">
            <DoneIcon fontSize="large" />
          </Fab>
        </IconButton>
        <Typography variant="h6">Submitted</Typography>
      </Box>
    </Modal>
  );
};

export default SubmitForm;
