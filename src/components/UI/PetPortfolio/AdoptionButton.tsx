import {IPetData} from "@/interfaces/PetInterface";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {FC} from "react";
// sx={{bgcolor: "lightblue"}}

const AdoptionButton = ({id}: {id: string}) => {
  return (
    <Container>
      <Grid
        textAlign="center"
        container
        // spacing={2}
        direction={{xs: "row", sm: "row"}}
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
            <Link href={`/AdoptionRequest/${id}`}>
              <Button
                // onClick={handleAdoption}
                sx={{
                  width: "100%",
                  padding: "30px",
                }}
              >
                {" "}
                <Typography
                  my="100px"
                  color="secondary.light"
                  variant="h1"
                  component={"span"}
                  fontWeight={"bold"}
                  fontSize={"25px"}
                >
                  Click here to Adopt Me!
                </Typography>
              </Button>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdoptionButton;
{
  /* <Stack justifyContent="center">
        Click here to Adopt Me!
        <Button>Adoption Request</Button>
      </Stack>
      <Box
        textAlign={"right"}
        display="flex"
        justifyContent="center"
        alignItems={"flex-start"}
      >
        <Image
          style={{
            marginLeft: "100px",
            color: "purple",
            transform: "scaleY(-1)",
            textAlign: "right",
          }}
          src={
            "https://media.tenor.com/L2XoEXWh7ewAAAAi/predicto-pointing-up.gif"
          }
          width={"200"}
          height={"0"}
          alt={""} // src="https://media.tenor.com/YFxmLLI0Og8AAAAi/kstr-kochstrasse.gif"
        />
      </Box> */
}
