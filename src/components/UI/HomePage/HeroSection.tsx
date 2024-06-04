import getEnvVariable from "@/utils/getEnvVariable";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";
import Image from "next/image";
import React from "react";
// import assets from "@assets";
const HeroSection = () => {
  return (
    <Container>
      <Stack direction={{xs: "column", md: "column", lg: "row"}}>
        <Box py={2}>
          <Typography variant="h1" color="primary.main" component="h3">
            Find L<Box component="span">ove in Ev</Box>
            <Box color="secondary.main" component="span">
              ery Paw!
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: {lg: "70%", xs: "100%"},
              margin: "10px",
            }}
          >
            Welcome to our pet adoption center! Here, you can meet many
            wonderful pets who are looking for a loving home. Whether
            you&apos;re searching for a playful puppy, a cuddly kitten, or a
            loyal companion, we have the perfect pet waiting for you. Join us in
            giving these animals a second chance at happiness and a forever home
          </Typography>
          <Button color="primary">Explore</Button>
        </Box>
        <Box
          bgcolor={blue}
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: {xs: "none", md: "none", lg: "block"},
              position: "absolute",
              right: "440px",
              bottom: "110px",
            }}
          >
            <Image
              // src="https://img.freepik.com/free-vector/happy-cartoon-puppy-friends_1308-163958.jpg?t=st=1716470865~exp=1716474465~hmac=7ddcefa61bd2e29e605bd006967781a86aa10e266fe3b8a8ef35062f7e5af421&w=740"
              src="https://img.freepik.com/free-vector/family-members-with-many-dogs_1308-89230.jpg?t=st=1716472773~exp=1716476373~hmac=47a5975e44cd8612d2410a46fc5192689c3ff23120c0ed3b5d31697019916060&w=740"
              alt={"image"}
              width={300}
              height={600}
            />
          </Box>

          <Box
            sx={{
              display: {xs: "none", md: "none", lg: "block"},
            }}
          >
            {" "}
            <Image
              src="https://img.freepik.com/free-vector/cheerful-puppies-wearing-collars-illustration_1308-162836.jpg?t=st=1716472596~exp=1716476196~hmac=040ff0ec1e2844acebfc1f0a2c708d20e09ea3cd4fdf47e8180775d9a37999cd&w=740"
              alt={"image"}
              width={1500}
              height={800}
            />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;
