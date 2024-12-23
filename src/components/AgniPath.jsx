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
import SchoolIcon from "@mui/icons-material/School";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { AGNIVEER } from "./constant";

function HorizontalTimeline() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        overflowX: "auto",
        p: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Timeline
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon sx={{ fontSize: "40px" }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ textAlign: "center", minWidth: "150px" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Complete your 10 and +2
            </Typography>
            <Typography variant="body2">(2 Years)</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Timeline Item 2 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <InsertInvitationIcon sx={{ fontSize: "40px" }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ textAlign: "center", minWidth: "150px" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Need minimum age of 17 to 21 years
            </Typography>
            <Typography variant="body2">(Age)</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Timeline Item 3 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              color="primary"
              variant="outlined"
              sx={{ marginTop: "30px" }}
            >
              <MilitaryTechIcon sx={{ fontSize: "40px" }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ textAlign: "center", minWidth: "150px" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Clear the Indian Army Agniveer Recruitment Exams
            </Typography>
            <Typography variant="body2">
              (Online Common Entrance Test, Physical Fitness Test, and Medical
              Test)
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
        {AGNIVEER.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              //   sx={{
              //     borderRadius: 2,
              //     boxShadow: 3,
              //     minHeight: "350px",
              //     display: "flex",
              //     flexDirection: "column",
              //     overflow: "auto",
              //     background: "#caf0f8",
              //     margin: "20px",
              //     width: "450px",
              //   }}
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
                sx={{ fontWeight: "bold", textAlign: "center", padding: "5px" }}
              >
                {item.title}
              </Typography>
              <Box component="ul">
                {item?.content.map((content, idx) => (
                  <li key={idx}>
                    <Typography variant="body2" sx={{ fontSize: "20px" }}>
                      {content}
                    </Typography>
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

export default function AgniPath() {
  return (
    <>
      <Navbar />
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: "bold", margin: "0px 0 20px 0" }}
      >
        Agniveer
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
        {HorizontalTimeline()}
        {TimelineDetails()}
      </Grid>
    </>
  );
}
