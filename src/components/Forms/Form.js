import React from "react";
import { TextField, Typography, Button, Paper } from "@mui/material";
import useStyles from "./Styles";

const Form = () => {
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Create a memory</Typography>
        <TextField variant="outlined" label="Creator" fullWidth />
      </form>
    </Paper>
  );
};

export default Form;
