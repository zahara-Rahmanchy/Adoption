import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
const AllPets = async () => {
  const res = await fetch("https://assignment-8-cyan.vercel.app/api/pets", {
    cache: "no-store",
  });
  //  destructuring the data and naming as pets
  const {data: pets} = await res.json();

  return (
    // <Box
    //   sx={{
    //     padding: "50px",
    //     marginTop: "180px",
    //     backgroundColor: "secondary.light",
    //     zIndex: 1,
    //     clipPath: "polygon(90px 10px,100% 2%,100% 100%,0 100%)",
    //   }}
    // >
    <Container
      sx={{
        padding: "50px",
        marginTop: "180px",
        // backgroundColor: "#F7D588",
        // clipPath: "polygon(0 0,100% 2%,100% 100%,0 100%)",
      }}
    >
      <Typography
        variant="h1"
        color="primary.main"
        component="h6"
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <Box color="primary.main" component="span">
          Meet Your Future Furry Companion!
        </Box>
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{xs: 1, sm: 2, md: 3}}
        justifyContent="center"
        marginTop="10px"
      >
        {pets.map((pet: any) => (
          <Grid
            key={pet.id}
            item
            xs={12}
            md={6}
            lg={4}
            textAlign={"center"}
            justifyContent={"center"}
            zIndex={5}
          >
            <Card
              sx={{
                maxWidth: 345,
                justifyContent: "center",
                textAlign: "center",
                height: 410,
                backgroundColor: "white",
                // backgroundColor: "secondary.main",
              }}
            >
              <CardMedia
                sx={{height: 140}}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  px="10px"
                >
                  <Typography
                    gutterBottom
                    variant="h1"
                    component="div"
                    color="primary.main"
                    sx={{fontSize: "25px", margin: 0, padding: "0"}}
                  >
                    {pet.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                    color="secondary.dark"
                  >
                    <FmdGoodOutlinedIcon
                      sx={{
                        marginRight: "5px",
                      }}
                    />
                    {pet.location}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  px="10px"
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    color="black"
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    <Box
                      component="span"
                      // color="#865C97"
                      sx={{
                        fontSize: "14px",
                      }}
                      color="secondary.dark"
                    >
                      Size:
                    </Box>
                    {"   "}
                    {pet.size}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    color="black"
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    <Box
                      component="span"
                      color="secondary.dark"
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      Age:
                    </Box>
                    {"   "}
                    {pet.age}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{fontSize: "13px"}}
                  color="body1"
                >
                  {pet.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  // color="primary.main"
                  sx={{
                    height: "30px",
                    width: "110px",
                    fontSize: "10px",
                    backgroundcolor: "#f7d588",
                    // margin: "6px",
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllPets;
