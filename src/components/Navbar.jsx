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
    <Box>
      <Grid
        container
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0",
          // alignItems: "center",
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
                <Link to="/">Jihoo Kim</Link>
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Button
                  color="inherit"
                  sx={{ fontWeight: darkMode ? "bold" : "normal" }}
                >
                  <Link to="/"> All Careers</Link>
                </Button>
                <Button color="inherit" sx={{ fontWeight: "normal" }}>
                  About
                </Button>
                <Button color="inherit" sx={{ fontWeight: "normal" }}>
                  Contact
                </Button>
                <Button color="inherit" sx={{ fontWeight: "normal" }}>
                  Projects
                </Button>
              </Box>
              {/* <IconButton onClick={toggleDarkMode}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton> */}
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Box>
  );
}
