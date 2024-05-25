import React from "react";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
const AdoptionPage = () => {
  return (
    <Container>
      <Stack
        my={5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            borderRadius: "5px",
            boxShadow: 1,
            backgroundColor: "secondary.light",
            textAlign: "center",
            paddingTop: "25px",
          }}
        >
          <Typography
            textAlign="center"
            variant="h6"
            color="primary.main"
            component="span"
            fontWeight={"bold"}
          >
            Please Reg
            <Box component="span" color="secondary.dark">
              ister To Adopt
            </Box>
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
                type="text"
                label="Username"
                variant="standard"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                type="text"
                id="standard-basic"
                label="Email"
                variant="standard"
                fullWidth={true}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Confirm Password"
                variant="standard"
                type="password"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                sx={{
                  width: "200px",
                  textAlign: "center",
                  backgroundColor: "secondary.dark",
                }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default AdoptionPage;
