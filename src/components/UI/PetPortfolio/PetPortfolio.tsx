"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import {IPetData} from "@/interfaces/PetInterface";

import AdoptionButton from "./AdoptionButton";
import {toast} from "sonner";
import {Router} from "next/router";

const PetPortfolio = ({
  pet,
  error,
}: {
  pet: IPetData;
  error: string | undefined;
}) => {
  console.log("data from ui: ", pet);

  return (
    // <div style={{background: "whiteSmoke"}}>
    <Container>
      {error && error !== undefined && toast.message(error)}
      {pet && (
        <Grid
          textAlign="center"
          container
          spacing={2}
          direction={{xs: "column", sm: "row"}}
          justifyContent="center"
          // alignItems="center"
        >
          <Grid item xs={6}>
            <Box
              my={"2px"}
              textAlign="center"
              // display="flex"
              // flexDirection={"column"}
              // justifyContent="center"
            >
              <Image
                src={pet.image[0]}
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
            xs={12}
            sm={6}
            container
            display="flex"
            // justifyContent="space-evenly"
            flexDirection="column"
            alignItems="center"
            // padding={5}
          >
            <Box
              // bgcolor={"grey"}
              // paddingLeft="60px"
              // display="flex"
              padding={5}
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
              {pet.adoptedStatus === "ADOPTED" && (
                <Typography
                  variant="body1"
                  marginTop="3px"
                  marginBottom="15px"
                  sx={{
                    fontSize: "14px",
                    // fontWeight: "bold",
                  }}
                  color="primary"
                >
                  <Box component={"span"} fontWeight={"bold"}>
                    Adoption Status: {""}
                  </Box>
                  {pet.adoptedStatus}
                </Typography>
              )}
              <Typography
                textAlign="left"
                marginBottom="15px"
                // width={"350px"}
                // maxWidth={"fit-content"}
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
                // width={"350px"}
                // maxWidth={"fit-content"}
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
                // width={"350px"}
                // maxWidth={"fit-content"}
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

              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography
                  textAlign="left"
                  marginRight="120px"
                  // width={"350px"}
                  // maxWidth={"fit-content"}
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    my: "2px",
                    display: {xs: "block", sm: "inline"},
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
                  // width={"350px"}
                  // maxWidth={"fit-content"}
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    my: "2px",
                    display: {xs: "block", sm: "inline"},

                    // fontWeight: "bold",
                  }}
                  color="body1"
                >
                  <Box color="primary.main" component="span" fontWeight="bold">
                    Breed:{" "}
                  </Box>
                  {pet.breed}
                </Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography
                  textAlign="left"
                  marginRight="60px"
                  // width={"350px"}
                  // maxWidth={"fit-content"}
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    my: "2px",
                    display: {xs: "block", sm: "inline"},
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
                  // width={"350px"}
                  // maxWidth={"fit-content"}
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    my: "2px",
                    display: {xs: "block", sm: "inline"},

                    // fontWeight: "bold",
                  }}
                  color="body1"
                >
                  <Box color="primary.main" component="span" fontWeight="bold">
                    Health Status:{" "}
                  </Box>
                  {pet.healthStatus}
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            {" "}
            <hr />
            <ImageList
              cols={6}
              // cols={{xs: 12, sm: 6}}

              sx={{
                marginTop: "30px",
                textAlign: "center",
                backgroundColor: "primary.light",
              }}
              // cols={3}
              // rowHeight={164}
            >
              {pet.image.map((item, index) => (
                <ImageListItem
                  key={index}
                  sx={{padding: "5px", textAlign: "center"}}
                >
                  <Image
                    src={`${item}`}
                    alt={`${(pet.species, index)}`}
                    loading="lazy"
                    width={"400"}
                    height={"100"}
                    style={{
                      width: "300px",
                      height: "200px",
                      textAlign: "center",
                      padding: "6px",
                      // borderColor: "#865C97",
                      // borderWidth: "3px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      )}
      {/* adoption Request button */}
      {pet && pet.adoptedStatus === "PENDING" && (
        <AdoptionButton id={pet.id} requirements={pet.adoptionRequirements} />
      )}
    </Container>
  );
};

export default PetPortfolio;
