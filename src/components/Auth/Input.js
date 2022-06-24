import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Input = ({ half, name, handleChange, label, autoFocus, type }) => {
  return (
    <div>
      <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
          name={name}
          onChange={handleChange}
          variant="outlined"
          required
          fullWidth
          label={label}
          autoFocus={autoFocus}
          type={type}
          InputProps={
            name === "password"
              ? {
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        {type === "password" ? (
                          <MdVisibility />
                        ) : (
                          <MdVisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
      </Grid>
    </div>
  );
};

export default Input;
