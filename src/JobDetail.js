import TopNav from "./TopNav";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { PrimaryButton, LoginInput, PRIMARY_GREEN } from "./StyledComponents";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import JOBS from "./jobs";

export default function JobDetail({ allJobs }) {
  let { id: idFromURL } = useParams();

  const selectedJobs = allJobs.find((job) => {
    return job.id === Number(idFromURL);
  });

  return (
    <>
      <TopNav />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 0"
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "70vh",
            background: "#F1F2F4",
            paddingRight: "70px"
          }}
        >
          <Typography
            sx={{ textAlign: "left", paddingBottom: "30px" }}
            variant="h6"
            gutterBottom
          >
            {selectedJobs.title}
          </Typography>
          <Divider />
          <Box sx={{ padding: "15px 0" }}>
            <Typography
              sx={{
                display: "flex",
                margin: "20px 0",
                color: "#39B54A",
                fontWeight: "bold",
                fontSize: "15px"
              }}
            >
              {selectedJobs.category}
            </Typography>
            <Typography sx={{ display: "flex" }}>
              Posted {selectedJobs.postedTime}
            </Typography>
            <Typography
              sx={{ display: "flex", marginTop: "20px", fontWeight: "550" }}
            >
              <img
                alt="location"
                src="https://assets.codepen.io/6060109/location-icon.png"
                style={{ height: "18px", marginRight: "5px" }}
              />
              {selectedJobs.remote ? "Remote, " : ""}
              {selectedJobs.location}
            </Typography>
            <Divider sx={{ paddingTop: "30px" }} />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Typography sx={{ textAlign: "left", fontSize: "11px" }}>
              {selectedJobs.description}
            </Typography>
          </Box>
          <Divider sx={{ marginTop: "40px" }} />
        </Box>
        <Box
          sx={{
            width: "300px",
            height: "65vh",
            background: "white",
            borderRadius: "3px"
          }}
        >
          <PrimaryButton
            sx={{
              width: "80%",
              margin: "20px",
              color: "white"
            }}
          >
            Submit a Proposal
          </PrimaryButton>
          <PrimaryButton
            sx={{
              width: "80%",
              background: "#F1F2F4",
              marginBottom: "40px",
              color: "#39B54A",
              border: "1px solid #39B54A"
            }}
          >
            <img
              alt="location"
              src="https://assets.codepen.io/6060109/heart-icon.png"
              style={{ height: "15px", marginRight: "10px" }}
            />
            Save a Job
          </PrimaryButton>
          <Divider />
          <Box sx={{ paddingLeft: "30px" }}>
            <Typography sx={{ margin: "30px 0", display: "flex" }}>
              About the Client
            </Typography>
            <Typography sx={{ margin: "30px 0", display: "flex" }}>
              <img
                alt="location"
                src="https://assets.codepen.io/6060109/check-icon.png"
                style={{
                  height: "15px",
                  marginRight: "5px",
                  marginRight: "10px"
                }}
              />
              Payment Verified
            </Typography>
            <Typography sx={{ margin: "30px 0", display: "flex" }}>
              <img
                alt="location"
                src="https://assets.codepen.io/6060109/location-icon-alt.png"
                style={{ height: "15px", marginRight: "10px" }}
              />
              Untited States
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ padding: "30px" }}>
            <Typography sx={{ margin: "10px 0 5px", display: "flex" }}>
              Job Link
            </Typography>
            <LoginInput
              sx={{ background: "#F1F2F4" }}
              placeholder="https://www.website.com"
            />
            <Typography
              sx={{ margin: "5px 0", color: "#39B54A", display: "flex" }}
            >
              Copy Link
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
