import {Box, Container, Typography} from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Container>
      <Box>
        <Typography color="primary.main" variant="h4" fontWeight={"bold"}>
          About US
        </Typography>
        <Typography>
          Our mission is to provide exceptional pet care and create a community
          for pet lovers to share and discover the best resources for their
          furry friends. We are dedicated to improving the lives of pets and
          their owners by offering reliable, comprehensive, and up-to-date
          information.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
