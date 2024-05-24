import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="primary.main" py="50px" marginTop="100px">
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{xs: 1, sm: 2, md: 3}}
        justifyContent="center"
      >
        <Grid
          item
          textAlign={"center"}
          justifyContent={"center"}
          xs={12}
          md={6}
          lg={6}
        >
          <Typography
            variant="h6"
            color="secondary.main"
            component={Link}
            href="/"
          >
            Contact Us
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Email:{" "}
            <Box component="span" color="secondary.light">
              pawfecmatch@gmail.com
            </Box>
          </Typography>

          <Typography variant="body1" color="secondary.main">
            Phone:{" "}
            <Box component="span" color="secondary.light">
              +09856850234
            </Box>
          </Typography>

          <Box
            color="secondary.main"
            display={"flex"}
            justifyContent="center"
            gap={6}
            marginTop="9px"
          >
            <InstagramIcon />
            {/* <FacebookOutlinedIcon /> */}
            <TwitterIcon />
          </Box>
        </Grid>
        <Grid
          item
          textAlign={"center"}
          justifyContent={"center"}
          xs={12}
          md={6}
          lg={6}
        >
          <Typography variant="h6" color="secondary.main">
            Additional Links
          </Typography>
          <Typography
            variant="body1"
            color="secondary.light"
            component={Link}
            href="/"
          >
            Privacy Policy
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="secondary.light"
            component={Link}
            href="/"
          >
            Terms of Use
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="secondary.light"
            component={Link}
            href="/"
          >
            FAQs
          </Typography>
        </Grid>
        <Grid
          item
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={"flex-end"}
          xs={12}
          md={12}
          lg={12}
        >
          <hr />
          <Typography color="secondary.light" marginTop={"50px"}>
            {" "}
            2024 PawFecMatch. All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
