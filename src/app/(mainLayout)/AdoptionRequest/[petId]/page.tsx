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
  Backdrop,
  CircularProgress,
} from "@mui/material";
import React, {useState} from "react";

import {SubmitHandler, useForm} from "react-hook-form";
import AdoptRequest, {AdoptionData} from "@/services/actions/AdoptRequest";
import {petId} from "@/constants/PetId";
import {toast} from "sonner";
import {getFromCookiesClient} from "@/utils/local-storage";
import {getUserInfo} from "@/services/auth.services";
import {useRouter} from "next/navigation";
// import {getUserInfo} from "@/services/actions/auth.services";

const AdoptionPage = ({params}: petId) => {
  const router = useRouter();
  const accessToken = getFromCookiesClient("accessToken");
  const userData: any = getUserInfo();
  const [loading, setLoading] = useState(false);
  const [agreeConditions, setAgreeConditions] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async data => {
    // console.log(data);
    setLoading(true);
    const {petOwnershipExperience, ...userInfo} = data;
    const petdata = {
      petId: params.petId,
      petOwnershipExperience,
    };
    // console.log(petdata);
    try {
      const res = await AdoptRequest(
        petdata as AdoptionData,
        String(accessToken)
      );
      // console.log(res);

      if (res?.data) {
        toast.success(res?.message);
        reset();
        router.back();
      } else {
        toast.error(res?.message);
        router.back();
      }
    } catch (err: any) {
      // console.log(err);
      toast.error(err?.message);
      router.back();
    } finally {
      setLoading(false);
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
            Make an Adopt
            <Box component="span" color="secondary.dark">
              ion Request
            </Box>
          </Typography>
          <Backdrop
            sx={{color: "#fff", zIndex: theme => theme.zIndex.drawer + 1}}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
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
                <TextField
                  type="text"
                  id="email"
                  label="Email"
                  variant="standard"
                  fullWidth={true}
                  defaultValue={userData?.email}
                  {...register("email")}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="contactNumber"
                  label="Contact Number"
                  variant="standard"
                  type="text"
                  defaultValue={userData.contact}
                  fullWidth={true}
                  {...register("contactNumber")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="petOwnershipExperience"
                  label="Additonal Information ( Previous Ownership Experience )"
                  variant="standard"
                  type="text"
                  fullWidth={true}
                  required
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
              disabled={!agreeConditions || loading}
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
