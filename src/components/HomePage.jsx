import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@mui/material";
import Navbar from "./Navbar";
import { ALL_CATEGORIES } from "./constant";
import { Link } from "react-router-dom";
import Popup from "./Popup";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        setOpen(true);
        resolve();
      }, 10000);
    });
  }, []);

  return (
    <div sx={{ position: "sticky", top: 0 }}>
      <Navbar />
      {open && (
        <Popup
          title="Need help?"
          content="Finding it hard choosing your career? Let us help you!"
          isNextVisible
        />
      )}
      <Box sx={{ padding: 4 }}>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container md={10} spacing={4}>
            {ALL_CATEGORIES.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <Link
                  to={`${card.path}`}
                  style={{
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    fontSize: "30px",
                  }}
                >
                  <Card sx={{ borderRadius: 2, boxShadow: 3, height: "420px" }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={card.image}
                      alt={card.title}
                    />
                    <CardContent sx={{ textAlign: "center", color: "black" }}>
                      <Typography
                        variant="h6"
                        component="div"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {card.title}
                      </Typography>
                    </CardContent>
                    <CardContent sx={{ textAlign: "center", color: "black" }}>
                      <Typography component="div" gutterBottom>
                        {card.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
