import {
  Container,
  Typography,
  Avatar,
  Button,
  Paper,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./Styles";
import { MdOutlineLock } from "react-icons/md";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () => {
    setShowPass((prevState) => !prevState);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "284253063789-1hh311a1gu5jk5lk5sjmouiq6h9kkm9r.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const swithMode = () => {
    setIsSignUp((prevState) => !prevState);
    handleShowPassword(false);
  };

  const googleFailure = (err) => {
    console.log(err);
  };
  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
          <GoogleLogin
            clientId="284253063789-1hh311a1gu5jk5lk5sjmouiq6h9kkm9r.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className="btn btn-primary"
                variant="contained"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />

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
