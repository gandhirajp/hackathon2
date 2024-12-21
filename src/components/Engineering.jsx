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
import { ENGINEERING, INFORMATION_TECHNOLOGY } from "./constant";
import { Link } from "react-router-dom";

const Engineering = () => {
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
          <Grid container md={10} spacing={4}>
            {ENGINEERING.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                {/* <Link to="/information-it"> */}
                <Card sx={{ borderRadius: 2, boxShadow: 3, height: "400px" }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {card.title}
                    </Typography>
                  </CardContent>
                </Card>
                {/* </Link> */}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Engineering;
