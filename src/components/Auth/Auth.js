import {
  Container,
  Typography,
  Avatar,
  Button,
  Paper,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "./Styles";
import { MdOutlineLock } from "react-icons/md";
import Input from "./Input";

const Auth = () => {
  const [showPass, setShowPass] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () => {
    setShowPass((prevState) => !prevState);
  };

  const swithMode = () => {
    setIsSignUp((prevState) => !prevState);
    handleShowPassword(false);
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <MdOutlineLock />
        </Avatar>
        <Typography>{isSignUp ? "Sign up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="First Name"
                  label="firstName"
                  handleChange={handleChange}
                  autoFocus
                  half={6}
                />
              </>
            )}
            <Input
              name="Email"
              label="email"
              handleChange={handleChange}
              autoFocus
              half={6}
              type="email"
            />
            <Input
              name="Password"
              label="password"
              handleChange={handleChange}
              autoFocus
              half={6}
              type={showPass ? "text" : "passowrd"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="Confirm Password"
                label="confirmPassword"
                handleChange={handleChange}
                autoFocus
                half={6}
                type="passowrd"
              />
            )}
          </Grid>
          <Button variant="contained" type="submit">
            {isSignUp ? "Sign up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Button onClick={swithMode}>
              {isSignUp
                ? `Already have an account ? SignIn`
                : `Don't have an account signup`}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
