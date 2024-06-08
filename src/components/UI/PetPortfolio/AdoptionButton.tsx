"use client";

import {getUserInfo, getUserRole, isLoggedIn} from "@/services/auth.services";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {FC} from "react";
// sx={{bgcolor: "lightblue"}}

const AdoptionButton = ({
  id,
  requirements,
}: {
  id: string;
  requirements: string;
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("scrren: ", isSmallScreen);
  return (
    <Container>
      <Grid
        textAlign="center"
        container
        // spacing={2}
        direction={{xs: "column-reverse", sm: "row"}}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Stack
            borderRadius={"50px"}
            borderColor={"#f7ad1b"}
            marginTop={"100px"}
            direction="column"
            // justifyContent="flex-end"
            // alignItems="center"
            spacing={2}
          >
            {" "}
            <Typography fontSize={"15px"}>
              <Box component="span" color="black" fontWeight={"bold"}>
                Adoption Requirements:
              </Box>{" "}
              {requirements}
            </Typography>
            <Link
              href={
                isLoggedIn() && getUserRole() === "User"
                  ? `/AdoptionRequest/${id}`
                  : "/"
              }
            >
              <Button
                sx={{
                  width: "100%",
                  padding: "30px",
                }}
              >
                {" "}
                <Box
                  my={{xs: "120px", sm: "100px"}}
                  color="secondary.light"
                  component={"span"}
                  fontWeight={"bold"}
                  fontSize={{xs: "20px"}}
                >
                  Click here to Adopt Me!
                </Box>
              </Button>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          {isSmallScreen ? (
            <Image
              style={{
                marginTop: "20px",
                color: "purple",

                textAlign: "center",
                objectFit: "cover",
              }}
              src="https://cdn.pixabay.com/animation/2022/10/13/00/28/00-28-27-444_512.gif"
              width={"200"}
              height={"0"}
              alt={""} // src="https://media.tenor.com/YFxmLLI0Og8AAAAi/kstr-kochstrasse.gif"
            />
          ) : (
            <Image
              style={{
                marginLeft: "100px",
                color: "purple",
                transform: "scaleY(-1)",
                textAlign: "right",
                objectFit: "cover",
              }}
              src={
                "https://media.tenor.com/L2XoEXWh7ewAAAAi/predicto-pointing-up.gif"
              }
              width={"200"}
              height={"0"}
              alt={""} // src="https://media.tenor.com/YFxmLLI0Og8AAAAi/kstr-kochstrasse.gif"
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdoptionButton;
