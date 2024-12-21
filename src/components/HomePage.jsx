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
// import { Grid } from "@mui/material/Grid";
import { Home } from "@mui/icons-material";
import Navbar from "./Navbar";
import { ALL_CATEGORIES } from "./constant";
import { Link } from "react-router-dom";
import Popup from './Popup'

const cards = [
  {
    id: 1,
    image: "https://via.placeholder.com/300", // Replace with your image URL
    title: "Image test",
    date: "2023-07-25",
    tags: ["Test"],
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300", // Replace with your image URL
    title: "How to test React with Jest",
    date: "2023-03-15",
    tags: ["React", "Test"],
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300", // Replace with your image URL
    title: "React vs Vue vs Angular",
    date: "2023-03-14",
    tags: ["React", "Vue.js", "Angular.js"],
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300", // Replace with your image URL
    title: "Sunset in the Desert",
    date: "2023-01-20",
    tags: [],
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300", // Replace with your image URL
    title: "Mountain Adventure",
    date: "2023-02-10",
    tags: [],
  },
  {
    id: 6,
    image: "https://via.placeholder.com/300", // Replace with your image URL
    title: "Beach Serenity",
    date: "2023-04-01",
    tags: [],
  },
];


const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  
useEffect(() => {
  new Promise((resolve) => {
    setTimeout(() => {
      setOpen(true);
      resolve();
    }, 5000);
  })
}, []);
  
  return (
    <div>
      <Navbar />
      {open && <Popup title='Need help?' content='Finding it hard choosing your career? Let us help you!' isNextVisible />}
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
                <Link to={`${card.path}`}>
                  <Card sx={{ borderRadius: 2, boxShadow: 3, height: "400px" }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card.image}
                      alt={card.title}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h6" component="div" gutterBottom>
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

export default HomePage;
