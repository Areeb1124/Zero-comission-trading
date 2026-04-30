import * as React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useAuth } from "../hooks/useAuth";

const defaultTheme = createTheme();

export default function Login() {
  const [alert, setAlert] = React.useState({ st: false, msg: "" });
  const navigate = useNavigate();
  const { login, user } = useAuth();

  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await axios.post("http://localhost:3002/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      await login(res.data.token);
    } catch (error) {
      if (error.response) {
        setAlert({ st: true, msg: error.response.data.error || "Login failed" });
      } else if (error.request) {
        setAlert({ st: true, msg: "Network Error" });
      } else {
        setAlert({ st: true, msg: "Something Went Wrong" });
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%)",
          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={6}
            sx={{
              p: 5,
              borderRadius: 4,
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main", width: 56, height: 56 }}>
                <LockOutlinedIcon />
              </Avatar>

              <Typography component="h1" variant="h4" sx={{ fontWeight: 700, mt: 1 }}>
                ZeroCommission
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                Sign in to access your trading dashboard
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "100%" }}>
                {alert.st ? (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {alert.msg}
                  </Alert>
                ) : null}

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.2,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Sign In
                </Button>

                <Typography
                  variant="body2"
                  sx={{ textAlign: "center", color: "text.secondary" }}
                >
                  Don&apos;t have an account?{" "}
                  <Link to="/register" style={{ textDecoration: "none", fontWeight: 600 }}>
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}