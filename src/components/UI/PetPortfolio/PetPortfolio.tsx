"use client";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import {IPetData} from "@/interfaces/PetInterface";

import AdoptionButton from "./AdoptionButton";

const PetPortfolio = ({pet}: {pet: IPetData}) => {
  console.log("data from ui: ", pet);

  return (
    <Container>
      <Grid
        textAlign="center"
        container
        spacing={2}
        direction={{xs: "column", sm: "row"}}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Box
            my={"2px"}
            textAlign="center"
            display="flex"
            justifyContent="center"
          >
            <Image
              src={pet.image}
              alt={""}
              width="500"
              height="100"
              style={{
                padding: "6px",
                borderColor: "#865C97",
                borderWidth: "3px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          container
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            // bgcolor={"grey"}
            // paddingLeft="60px"
            // display="flex"
            textAlign={"left"}
          >
            <Typography
              textAlign="left"
              variant="h1"
              component="h6"
              sx={{fontSize: "30px"}}
            >
              Hi there, I&apos;m {pet.name}
            </Typography>
            <Typography
              variant="body1"
              marginTop="3px"
              marginBottom="15px"
              sx={{
                fontSize: "14px",
                // fontWeight: "bold",
              }}
              color="secondary.dark"
            >
              <FmdGoodOutlinedIcon
                sx={{
                  marginRight: "5px",
                  fontSize: "12px",
                }}
              />
              {pet.location}
            </Typography>
            <Typography
              textAlign="left"
              marginBottom="15px"
              width={"350px"}
              maxWidth={"fit-content"}
              variant="body1"
              sx={{
                fontSize: "16px",
                // fontWeight: "bold",
              }}
              color="body1"
            >
              {pet.description}
            </Typography>
            <Typography
              textAlign="left"
              width={"350px"}
              maxWidth={"fit-content"}
              variant="body1"
              sx={{
                fontSize: "14px",
                my: "2px",
                // fontWeight: "bold",
              }}
              color="body1"
            >
              <Box color="black" component="span" fontWeight="bold">
                Temperament:{" "}
              </Box>{" "}
              {pet.temperament}
            </Typography>
            <Typography
              textAlign="left"
              width={"350px"}
              maxWidth={"fit-content"}
              variant="body1"
              sx={{
                fontSize: "14px",
                my: "2px",
                // fontWeight: "bold",
              }}
              color="body1"
            >
              <Box color="black" component="span" fontWeight="bold">
                Special Needs:{" "}
              </Box>
              {pet.specialNeeds.join(", ")}
            </Typography>

            {/* age,breed,type box */}
            <hr style={{marginTop: "13px", marginBottom: "20px"}} />
            <Box>
              <Typography
                textAlign="left"
                marginRight="120px"
                width={"350px"}
                maxWidth={"fit-content"}
                variant="body1"
                sx={{
                  fontSize: "14px",
                  my: "2px",
                  display: "inline",
                  // fontWeight: "bold",
                }}
                color="body1"
              >
                <Box color="primary.main" component="span" fontWeight="bold">
                  Age:{" "}
                </Box>
                {pet.age}
              </Typography>
              <Typography
                textAlign="left"
                width={"350px"}
                maxWidth={"fit-content"}
                variant="body1"
                sx={{
                  fontSize: "14px",
                  my: "2px",
                  display: "inline",

                  // fontWeight: "bold",
                }}
                color="body1"
              >
                <Box color="primary.main" component="span" fontWeight="bold">
                  Breed:{" "}
                </Box>
                {pet.breed}
              </Typography>
            </Box>
            <Box>
              <Typography
                textAlign="left"
                marginRight="60px"
                width={"350px"}
                maxWidth={"fit-content"}
                variant="body1"
                sx={{
                  fontSize: "14px",
                  my: "2px",
                  display: "inline",
                  // fontWeight: "bold",
                }}
                color="body1"
              >
                <Box color="primary.main" component="span" fontWeight="bold">
                  Gender:{" "}
                </Box>
                {pet.gender}
              </Typography>
              <Typography
                textAlign="left"
                width={"350px"}
                maxWidth={"fit-content"}
                variant="body1"
                sx={{
                  fontSize: "14px",
                  my: "2px",
                  display: "inline",

                  // fontWeight: "bold",
                }}
                color="body1"
              >
                <Box color="primary.main" component="span" fontWeight="bold">
                  Health Status:{" "}
                </Box>
                {pet.medicalHistory}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* adoption Request button */}

      <AdoptionButton id={pet.id} />
    </Container>
  );
};

export default PetPortfolio;
