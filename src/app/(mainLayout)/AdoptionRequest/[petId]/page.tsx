"use client";
import {
  Box,
  Button,
  Grid,
  TextField,
  Container,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {toast} from "sonner";
import {Form, SubmitHandler, useForm} from "react-hook-form";
import AdoptRequest from "@/services/actions/AdoptRequest";

import {petId} from "../../PetPortfolio/[petId]/page";
const AdoptionPage = ({params}: petId) => {
  // const router = useRouter();
  console.log(params.petId);
  const [agreeConditions, setAgreeConditions] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<any>();
  const password = watch("password");
  const onSubmit: SubmitHandler<any> = async data => {
    console.log(data);
    const {conpassword, ...userInfo} = data;
    console.log(userInfo);
    try {
      const res = await AdoptRequest(userInfo);
      console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        //   router.push("/Login");
      }
    } catch (err) {
      console.log(err);
    }
  };
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
            maxWidth: 900,
            width: "100%",
            borderRadius: "5px",
            boxShadow: 1,
            backgroundColor: "secondary.light",
            textAlign: "center",
            paddingTop: "25px",
            color: "primary.main",
          }}
        >
          <Typography
            textAlign="center"
            variant="h6"
            color="primary.main"
            component="span"
            fontWeight={"bold"}
          >
            Make an
            <Box component="span" color="secondary.dark">
              Adoption Request
            </Box>
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {/* <TextField
                  aria-readonly
                  id="standard-basic"
                  type="text"
                  label="Name"
                  defaultValue={pet.name}
                  variant="standard"
                  fullWidth={true}
                  {...register("name")}
                /> */}
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  type="text"
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  fullWidth={true}
                  {...register("email")}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Contact Number"
                  variant="standard"
                  type="text"
                  fullWidth={true}
                  {...register("contactNumber")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Additonal Information ( Previous Ownership Experience )"
                  variant="standard"
                  type="textfield"
                  fullWidth={true}
                  {...register("petOwnershipExperience")}
                />
              </Grid>
              <FormControlLabel
                required
                control={
                  <Checkbox
                    checked={agreeConditions}
                    onChange={() => setAgreeConditions(!agreeConditions)}
                  />
                }
                label="Agree To Terms & Conditions"
              />
            </Grid>

            {/* <Checkbox label="Agree To Terms & Conditions" /> */}
            <Button
              disabled={!agreeConditions}
              sx={{
                marginBottom: 5,
                width: "200px",
                textAlign: "center",
                backgroundColor: "primary.main",
              }}
              type="submit"
            >
              Submit Request
            </Button>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default AdoptionPage;
