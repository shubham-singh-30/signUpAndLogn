import React, { useState } from "react";
import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
export const Forgetpassword = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [message, setMessage] = useState();
  const handleChange = (e) => {
    let value = e.target.value;
    let target = e.target.id;
    setValues((prev) => ({
      ...prev,
      [target]: value,
    }));
  };
  const handleLogin = () => {
    let user = localStorage.getItem("userSignup");
    if (user !== null) {
      const initialValue = JSON.parse(user);

      let userExist = initialValue.findIndex(
        (item) => item.email === values.email
      );
      let userData = initialValue.find((item) => item.email === values.email);
      if (userData) {
        let newPassword = { ...userData, password: values.password };
        initialValue[userExist] = newPassword;
        localStorage.setItem("userSignup", JSON.stringify(initialValue));
        setMessage("Password updated successfully");
      } else {
        setMessage("Invalid user");
        setTimeout(() => {
          setMessage("");
        }, 4000);
      }
    } else {
      setMessage("Invalid user");
      setTimeout(() => {
        setMessage("");
      }, 4000);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "100vh",
        width: "100vw",
        backgroundColor: "#0D80D8",
      }}
    >
      <Box
        sx={{
          background: "white",
          borderRadius: 4,
          height: 475,
          width: 415,
        }}
      >
        <Grid
          p={3}
          sx={{
            display: "grid",
            justifyItems: "center",
          }}
        >
          <Typography mt={3} mb={3} variant="h6">
            Log in
          </Typography>

          <TextField
            onChange={handleChange}
            value={values.email}
            id="email"
            variant="outlined"
            fullWidth
          />
          <Typography mb={4} variant="caption">
            Email
          </Typography>

          <TextField
            onChange={handleChange}
            value={values.password}
            id="password"
            variant="outlined"
            fullWidth
          />
          <Typography mb={4} variant="caption">
            New Password
          </Typography>
          <Typography>{message}</Typography>
          <Button mt={2} variant="contained" onClick={handleLogin}>
            Change Password
          </Button>
          <Grid mt={2} sx={{ display: "flex", gap: "60px" }}>
            <Typography variant="caption">
              Create account <Link to="/signup">Sign up</Link>
            </Typography>
            <Typography variant="caption">
              <Link to="/login">Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
