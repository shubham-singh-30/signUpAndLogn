import React, { useState } from "react";
import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import sign from "../images/sign.png";
import { handleSignUp } from "../features/signup/signUpSlice";
import { useDispatch, useSelector } from "react-redux";
const initialState = {
  name: "",
  password: "",
  email: "",
  mobileNumber: "",
};
const initialError = {
  name: false,
  password: false,
  email: false,
  mobileNumber: false,
};

export const SignUp = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.signUp.message);
  const [user, setUser] = useState(initialState);
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState(initialError);

  const handleChange = (e) => {
    let value = e.target.value;
    let target = e.target.id;
    setUser((prev) => ({
      ...prev,
      [target]: value,
    }));
  };
  const checkError = (target, value) => {
    if (value === "")
      setError((prev) => ({
        ...prev,
        [target]: true,
      }));
    else
      setError((prev) => ({
        ...prev,
        [target]: false,
      }));
  };

  const handleButtonClick = () => {
    Object.entries(user).map(([key, value]) => checkError(key, value));

    const isEmpty = Object.values(user).every((value) => {
      if (value === "") {
        return false;
      }
      return true;
    });
    if (isEmpty) {
      dispatch(handleSignUp(user));
      setShowMessage(true);
      
      setTimeout(() => {
       
        setShowMessage(false);
      }, 3000);
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        padding: "10px 120px",
      }}
    >
      <Grid
        container
        sx={{
          background: "white",
          borderRadius: 4,
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Grid
          p={3}
          mt={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "19px",
            width: "400px",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            SignUp
          </Typography>
          <Typography variant="caption">Your Name</Typography>
          <TextField
            error={error.name}
            value={user.name}
            id="name"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            required
          />
          <Typography variant="caption">Email</Typography>
          <TextField
            error={error.email}
            value={user.email}
            id="email"
            variant="outlined"
            type="email"
            fullWidth
            onChange={handleChange}
            required
          />
          <Typography variant="caption">Password</Typography>

          <TextField
            error={error.password}
            type="password"
            value={user.password}
            id="password"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            required
          />

          <Typography variant="caption">Mobile No.</Typography>

          <TextField
            error={error.mobileNumber}
            type="number"
            value={user.mobileNumber}
            variant="outlined"
            id="mobileNumber"
            fullWidth
            onChange={handleChange}
            required
          />
          {showMessage && (
            <Typography
              mt={2}
              mb={4}
              sx={{ textAlign: "center" }}
              variant="caption"
            >
              {message}
            </Typography>
          )}
          <Button mt={2} variant="contained" onClick={handleButtonClick}>
            Sign Up
          </Button>

          <Typography
            mt={2}
            mb={4}
            sx={{ textAlign: "center" }}
            variant="caption"
          >
            Already have an account <Link to="/login">Login</Link>
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <img alt="signup" src={sign} />
        </Grid>
      </Grid>
    </Box>
  );
};
