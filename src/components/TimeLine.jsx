import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import { Box, Card, Grid } from "@mui/material";
import { TIME_LINE_DETAILS } from "./constant";

// function HorizontalTimeline() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         overflowX: "auto",
//         p: 2,
//       }}
//     >
//       <Timeline sx={{ display: "flex", flexDirection: "row", gap: 14 }}>
//         <TimelineItem>
//           <TimelineDot color="primary">
//             <FastfoodIcon sx={{ fontSize: "40px" }} />
//           </TimelineDot>
//           <TimelineConnector sx={{ rotate: "90deg", marginLeft: "50px" }} />
//           <TimelineContent sx={{ textAlign: "center", minWidth: "120px" }}>
//             <Typography variant="h6">Eat</Typography>
//             <Typography variant="body2">9:30 am</Typography>
//           </TimelineContent>
//           <TimelineConnector sx={{ rotate: "90deg", marginLeft: "50px" }} />
//         </TimelineItem>
//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot color="secondary">
//               <LaptopMacIcon />
//             </TimelineDot>
//             <TimelineConnector sx={{ rotate: "90deg", marginLeft: "50px" }} />
//           </TimelineSeparator>
//           <TimelineContent sx={{ textAlign: "center", minWidth: "120px" }}>
//             <Typography variant="h6">Code</Typography>
//             <Typography variant="body2">10:00 am</Typography>
//           </TimelineContent>
//           <TimelineConnector sx={{ rotate: "90deg", marginLeft: "50px" }} />
//         </TimelineItem>
//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot color="primary" variant="outlined">
//               <HotelIcon />
//             </TimelineDot>
//             <TimelineConnector sx={{ rotate: "90deg", marginLeft: "50px" }} />
//           </TimelineSeparator>
//           <TimelineContent sx={{ textAlign: "center", minWidth: "120px" }}>
//             <Typography variant="h6">Sleep</Typography>
//             <Typography variant="body2">11:00 pm</Typography>
//           </TimelineContent>
//           <TimelineConnector sx={{ rotate: "90deg", marginLeft: "50px" }} />
//         </TimelineItem>
//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot color="secondary">
//               <RepeatIcon />
//             </TimelineDot>
//           </TimelineSeparator>
//           <TimelineContent sx={{ textAlign: "center", minWidth: "120px" }}>
//             <Typography variant="h6">Repeat</Typography>
//             <Typography variant="body2">Every day</Typography>
//           </TimelineContent>
//         </TimelineItem>
//       </Timeline>
//     </Box>
//   );
// }

function HorizontalTimeline() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        p: 2,
      }}
    >
      <Timeline sx={{ display: "flex", flexDirection: "row" }}>
        <TimelineItem>
          <TimelineDot color="primary" sx={{ marginTop: "30px" }}>
            <LaptopMacIcon sx={{ fontSize: "40px" }} />
          </TimelineDot>
          <TimelineConnector
            sx={{ rotate: "90deg", flexGrow: 0, marginLeft: "70px" }}
          />
          <TimelineContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{ marginLeft: "60px", fontWeight: "bold", fontSize: "15px" }}
            >
              10th-12th Standard
            </Typography>
            <Typography variant="body2" sx={{ marginLeft: "60px" }}>
              (2 Years){" "}
            </Typography>
          </TimelineContent>
          <TimelineConnector
            sx={{ rotate: "90deg", marginLeft: "50px", flexGrow: 0 }}
          />
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" sx={{ marginTop: "30px" }}>
              <LaptopMacIcon sx={{ fontSize: "40px" }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineConnector
            sx={{ rotate: "90deg", marginLeft: "80px", flexGrow: 0 }}
          />
          <TimelineContent sx={{ textAlign: "center", minWidth: "120px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "15px", marginLeft: "60px" }}
            >
              Bachelor’s Degree
            </Typography>
            <Typography variant="body2" sx={{ marginLeft: "60px" }}>
              (3-4 Years)
            </Typography>
          </TimelineContent>
          <TimelineConnector
            sx={{ rotate: "90deg", marginLeft: "50px", flexGrow: 0 }}
          />
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              color="primary"
              variant="outlined"
              sx={{
                marginTop: "30px",
                "::before": { padding: "0px" },
              }}
            >
              <LaptopMacIcon sx={{ fontSize: "40px" }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineConnector
            sx={{ rotate: "90deg", marginLeft: "60px", flexGrow: 0 }}
          />
          <TimelineContent sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ marginLeft: "60px", fontWeight: "bold", fontSize: "15px" }}
            >
              Certifications & Projects
            </Typography>
            <Typography variant="body2" sx={{ marginLeft: "55px" }}>
              (Parallel to Degree)
            </Typography>
          </TimelineContent>
          <TimelineConnector
            sx={{ rotate: "90deg", marginLeft: "50px", flexGrow: 0 }}
          />
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" sx={{ marginTop: "30px" }}>
              <LaptopMacIcon sx={{ fontSize: "40px" }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ textAlign: "center", minWidth: "120px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "15px" }}
            >
              After Graduation
            </Typography>
            <Typography variant="body2">
              (Entry-Level Job/Internship)
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

const TimelineDetails = () => {
  return (
    <Grid
      container
      spacing={4}
      md={10}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <Grid container md={12} spacing={4}>
        {TIME_LINE_DETAILS.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                height: "360px",
                flexDirection: "column",
                background: "#caf0f8",
                padding: 4,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                {item.title}
              </Typography>
              <Box component="ul">
                {item?.content.map((content, idx) => (
                  <li key={idx}>
                    <Typography variant="body2">{content}</Typography>
                  </li>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default function CustomizedTimeline() {
  return (
    <>
      <Navbar />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          marginLeft: "10px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        Artificial Intelligence Engineer
      </Typography>
      <Grid
        container
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>{HorizontalTimeline()}</div>
        {TimelineDetails()}
      </Grid>
    </>
  );
}
