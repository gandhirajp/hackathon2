import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Box sx={{ display: "fixed" }}>
      <Grid
        container
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0px 40px 0px",
          // backgroundColor: "red",
        }}
      >
        <Grid container const md={10}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "30px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    fontSize: "30px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  CareerCue
                </Link>
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Button
                  color="inherit"
                  sx={{ fontWeight: darkMode ? "bold" : "normal" }}
                >
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      fontSize: "15px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    All Careers
                  </Link>
                </Button>
                <Button
                  color="inherit"
                  style={{
                    textDecoration: "none",
                    ontSize: "15px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Link
                    to="/career-path-selector"
                    style={{
                      textDecoration: "none",
                      fontSize: "15px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Find My Career
                  </Link>
                </Button>
                <Button
                  color="inherit"
                  style={{
                    textDecoration: "none",
                    ontSize: "15px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Profile
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Box>
  );
}
