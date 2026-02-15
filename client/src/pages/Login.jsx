import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  // Validation logic
  const validate = () => {
    let tempErrors = {};

    if (!isLogin) {
      if (formData.name.trim().length < 3) {
        tempErrors.name = "Name must be at least 3 characters";
      }
    }

    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main", mb: 2 }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant="h5" fontWeight="bold">
          {isLogin ? "Login" : "Register"}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", mt: 2 }}>
          
          {/* PHOTO UPLOAD (Only in Signup) */}
          {!isLogin && (
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <IconButton component="label">
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  src={
                    formData.photo
                      ? URL.createObjectURL(formData.photo)
                      : ""
                  }
                />
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleImageChange}
                />
                <PhotoCamera
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    bgcolor: "white",
                    borderRadius: "50%",
                    p: 0.5,
                  }}
                />
              </IconButton>
            </Box>
          )}

          {/* NAME */}
          {!isLogin && (
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          )}

          {/* BIO */}
          {!isLogin && (
            <TextField
              fullWidth
              label="Bio"
              name="bio"
              margin="normal"
              value={formData.bio || ""}
              onChange={handleChange}
            />
          )}

          {/* USERNAME */}
          <TextField
            fullWidth
            label="Username"
            name="username"
            margin="normal"
            value={formData.username}
            onChange={handleChange}
          />

          {/* PASSWORD */}
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, py: 1.2 }}
          >
            {isLogin ? "Login" : "Register"}
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
          </Typography>

          <Button
            fullWidth
            variant="text"
            onClick={() => {
              setIsLogin(!isLogin);
              setErrors({});
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
