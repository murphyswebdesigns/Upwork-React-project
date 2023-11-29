import { useState } from "react";
import Box from "@mui/material/Box";

import TopNav from "./TopNav";

import Typography from "@mui/material/Typography";
import CategoryMenu from "./CategoryMenu";
import BodySearch from "./BodySearch";
import JobList from "./JobList";

export default function JobBoard({ allJobs }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [];

  for (let job of allJobs) {
    if (!categories.includes(job.category)) {
      categories.push(job.category);
    }
  }

  return (
    <>
      <TopNav />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          textAlign: "left",
          padding: "50PX 10%"
        }}
      >
        <Box sx={{ width: "30%" }}>
          <Typography sx={{ marginBottom: "30px" }} variant="h5" gutterBottom>
            Find Work
          </Typography>
          <Typography sx={{ marginBottom: "0" }} variant="h6" gutterBottom>
            Categories
          </Typography>
          <CategoryMenu
            sx={{
              textAlign: "left",
              padding: "0"
            }}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
        <Box sx={{ width: "70%" }}>
          <BodySearch />
          <JobList
            jobs={allJobs.filter((job) => {
              if (!selectedCategory) {
                return true;
              } else {
                job.category === selectedCategory;
              }
            })}
          />
        </Box>
      </Box>
    </>
  );
}
