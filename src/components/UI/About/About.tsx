"use client";
import {teamInformation} from "@/constants/teamInformation";
// import {teamInformation} from "@/constants/teamInformation";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import {BorderColor} from "@mui/icons-material";
const About = () => {
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
      <Box marginTop={5} marginBottom={2}>
        <Typography variant="h5">
          <Box color="primary.main" component="span">
            Our Paw
          </Box>
          <Box color="secondary.dark" component="span">
            fect Mat
          </Box>
          ch Family
        </Typography>
      </Box>
      <Grid container rowSpacing={5} justifyContent="center">
        {teamInformation.map((t: any) => (
          <Grid
            key={t.id}
            item
            xs={12}
            sm={6}
            lg={4}
            textAlign={"center"}
            justifyContent={"center"}
            zIndex={5}
          >
            <Card
              sx={{
                maxWidth: 345,
                // textAlign: "center",
                maxHeight: "fit-content",
                height: 360,

                backgroundColor: "white",
              }}
            >
              <CardMedia
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <Image
                  src={t.image}
                  alt={`${t.name} image`}
                  width={300}
                  height={0}
                  style={{objectFit: "cover"}}
                />
                {/* title={pet.species + "img"} */}
              </CardMedia>
              <CardContent>
                <Typography
                  mx="10px"
                  textAlign={"left"}
                  variant="body1"
                  sx={{fontSize: "25px"}}
                  color="primary.main"
                  fontWeight={"bold"}
                >
                  {t.name}
                </Typography>
                <hr style={{marginTop: "8px"}} />
                <Typography
                  mx="10px"
                  textAlign={"left"}
                  variant="body1"
                  sx={{fontSize: "13px", my: 1}}
                  color="body1"
                >
                  {t.bio}
                </Typography>
                {/* </Box> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack
        direction={{xs: "column", sm: "row"}}
        bgcolor={"#F4E0FC"}
        borderRadius={"50px"}
        justifyContent={"space-betweeen"}
        width={"97%"}
        my={8}
        px={4}
      >
        {/* <Stack */}
        <Box
          sx={{
            // maxWidth: 600,
            width: {xs: "100%", sm: "50%"},
            borderRadius: "5px",

            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          <form>
            <Typography
              color={"primary.main"}
              variant="h6"
              fontWeight={"bold"}
              fontSize={"26px"}
              mx={3}
              marginTop={3}
            >
              Contact Us
            </Typography>
            <Grid
              container
              spacing={2}
              gap={2}
              px={4}
              py={5}
              width="100%"
              justifyContent={"center"}
            >
              <Grid item xs={12} md={12}>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  fullWidth={true}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Your Message"
                  variant="standard"
                  type="text"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} textAlign="center"></Grid>
            </Grid>
            <Button
              sx={{
                width: "200px",
                textAlign: "center",
                marginBottom: 5,
                bgcolor: "#f7ad1b",
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // maxWidth: 600,
            width: {xs: "100%", sm: "50%"},
            borderRadius: "5px",

            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          <Typography
            color={"primary.main"}
            variant="h6"
            fontWeight={"bold"}
            fontSize={"26px"}
            mx={3}
            my={3}
          >
            Call Us On:
            <Box component={"span"} fontWeight={"normal"} fontSize={"23px"}>
              {" "}
              018978709990
            </Box>
          </Typography>
          <hr style={{borderColor: "black", width: "80%"}} />
          <Typography
            color={"primary.main"}
            variant="h6"
            fontWeight={"bold"}
            fontSize={"24px"}
            mx={3}
            marginTop={3}
          >
            Or Follow Us:
            <Box
              color="primary.main"
              display={"flex"}
              justifyContent="center"
              gap={6}
              marginTop="9px"
            >
              <InstagramIcon />
              <FacebookOutlinedIcon />
              <TwitterIcon />
            </Box>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;
