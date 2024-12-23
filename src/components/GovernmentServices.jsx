import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { GOVERMENT_SERVICES } from "./constant";
import { Link } from "react-router-dom";

const GovernmentServices = () => {
  return (
    <div>
      <Navbar />
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
          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              paddingBottom: "20px",
            }}
          >
            Government Services
          </div>
          <Grid container md={10} spacing={4}>
            {GOVERMENT_SERVICES.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <Link
                  to={`${card.path}`}
                  style={{
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    fontSize: "30px",
                  }}
                >
                  <Card sx={{ borderRadius: 2, boxShadow: 3, height: "320px" }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card.image}
                      alt={card.title}
                      height="250"
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

export default GovernmentServices;
