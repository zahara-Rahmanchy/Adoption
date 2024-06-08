"use client";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Image from "next/image";
import ExtractSpecialNeeds from "./ExtractSpecialNeeds";
import {useRouter} from "next/navigation";
import Link from "next/link";
import getEnvVariable from "@/utils/getEnvVariable";
import {getUserInfo, isLoggedIn} from "@/services/auth.services";
import {getFromCookiesClient} from "@/utils/local-storage";
import {authKey} from "@/constants/authkey";
import {toast} from "sonner";

const AllPets = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [pets, setPets] = useState([]);
  const [specialNeedsArray, setSpecialNeedsArray] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");

  const handleReset = () => {
    setGender("");
    setSearchTerm("");
    setSize("");
    setSpecialNeeds("");
  };
  const handleFilterSize = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  const handleFilterGender = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };
  const handleFilterNeeds = (event: SelectChangeEvent) => {
    // console.log(event.target.value);
    setSpecialNeeds(event.target.value);
  };

  useEffect(() => {
    const fetchPets = async () => {
      const query = new URLSearchParams();
      if (searchTerm) query.append("searchTerm", searchTerm);
      if (gender) query.append("gender", gender);
      if (size) query.append("size", size);
      if (specialNeeds) query.append("specialNeeds", specialNeeds);
      console.log(query.toString());
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/pets?${query.toString()}`,
          {
            next: {
              revalidate: 30,
            },
          }
        );
        //  destructuring the data and naming as pets
        const {data} = await res.json();
        setPets(data);

        const specialNeedsList = await ExtractSpecialNeeds();
        setSpecialNeedsArray(specialNeedsList);
        // console.log("specialNeedsList: ", specialNeedsList);
      } catch (err: any) {
        toast.error(err?.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, gender, size, specialNeeds]);
  console.log("searchterm: ", searchTerm);
  console.log("needs: ", specialNeedsArray);

  return (
    <Container
      sx={{
        // padding: "50px",
        marginTop: "100px",
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
      <Box
        display={"flex"}
        flexDirection={{xs: "column", lg: "row"}}
        justifyContent="space-between"
      >
        <TextField
          sx={{
            borderRadius: "50%",

            color: "primary.main",
            borderColor: "primary.main",
            m: 1,
            minWidth: 130,
          }}
          onChange={e => setSearchTerm(e.target.value)}
          id="outlined-basic"
          label="Search"
          variant="standard"
        />
        <FormControl variant="standard" sx={{m: 1, minWidth: 130}}>
          <InputLabel id="demo-simple-select-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Size"
            onChange={handleFilterSize}
          >
            <MenuItem value={"Large"}>Large</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Small"}>Small</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{m: 1, minWidth: 130}}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={handleFilterGender}
          >
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{m: 1, minWidth: 130}}>
          <InputLabel id="demo-simple-select-label">Special Needs</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={specialNeeds}
            label="Special Needs"
            onChange={handleFilterNeeds}
          >
            <MenuItem value={"disabled"}></MenuItem>
            {specialNeedsArray.map((need: string) => (
              <MenuItem value={need} key={need}>
                {need}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          sx={{m: 1, minWidth: 130}}
          color="secondary"
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>

      {loading && (
        <p style={{textAlign: "center"}}>
          <CircularProgress color="inherit" />
        </p>
      )}
      {pets !== undefined ? (
        <Grid
          width={"100%"}
          // gap={1}
          mx={"auto"}
          container
          rowSpacing={5}
          justifyContent="center"
          marginTop="10px"
        >
          {pets.map((pet: any) => (
            <Grid
              width={"100%"}
              key={pet.id}
              item
              xs={12}
              sm={12}
              lg={4}
              textAlign={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              zIndex={5}
            >
              <Card
                sx={{
                  maxWidth: {xs: "100%", lg: 345},
                  justifyContent: "center",
                  textAlign: "center",
                  maxHeight: "fit-content",
                  height: 500,

                  backgroundColor: "white",
                }}
              >
                <CardMedia
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    // background: "blue",
                    height: "250px",
                  }}
                >
                  <Image
                    src={pet.image[0]}
                    alt={`${pet.species} image`}
                    width={300}
                    height={0}
                    style={{objectFit: "contain"}}
                  />
                  {/* title={pet.species + "img"} */}
                </CardMedia>
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
                    marginTop={4}
                  >
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      // color="black"
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
                      // color="black"
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
                        Breed:
                      </Box>
                      {"   "}
                      {pet.breed}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      // color="black"
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
                  <hr />
                  <Typography
                    variant="body1"
                    sx={{fontSize: "13px", my: 1}}
                    color="body1"
                  >
                    {pet.description.length > 100
                      ? `${pet.description.slice(0, 100)} ...`
                      : pet.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    href={isLoggedIn() ? `PetPortfolio/${pet.id}` : `/Login`}
                  >
                    <Button
                      variant="contained"
                      // color="primary.main"
                      sx={{
                        height: "30px",
                        width: "110px",
                        fontSize: "10px",
                        backgroundcolor: "#f7d588",
                        marginBottom: 2,
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography textAlign={"center"} fontSize={"20px"} color={"purple"}>
          No pet data
        </Typography>
      )}
    </Container>
  );
};

export default AllPets;
