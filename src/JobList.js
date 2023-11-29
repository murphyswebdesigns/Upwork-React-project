import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

export default function JobList({ jobs }) {
  return (
    <Paper>
      {jobs.map((jobs) => {
        return (
          <Box key={jobs.id}>
            <Box sx={{ padding: "15px" }}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/job/${jobs.id}`}
              >
                <Typography
                  sx={{ marginBottom: "15px" }}
                  variant="h6"
                  gutterBottom
                >
                  {jobs.title}
                </Typography>
              </Link>
              <Typography variant="subtitle2" gutterBottom>
                Hourly ${jobs.hourlyUSD}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Posted {jobs.postedTime}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                <img
                  alt="location"
                  src="https://assets.codepen.io/6060109/location-icon.png"
                  style={{ height: "13px", marginRight: "5px" }}
                />
                {jobs.remote ? "Remote, " : ""}
                {jobs.location}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ marginTop: "15px" }}
              >
                {jobs.description}
              </Typography>
            </Box>
            <Divider />
            <Box></Box>
            <Divider />
            <Box></Box>
            <Divider />
          </Box>
        );
      })}
    </Paper>
  );
}
