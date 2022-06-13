import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
  },
  root: {
    "& .MuiTextField-root": {
      width: "100%",
    },
  },
  avatar: {
    margin: "2px",
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: "3px",
    width: "100%",
  },
  googleButton: {},
}));
