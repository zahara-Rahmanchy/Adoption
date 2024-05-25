"use client";
import {LoginInputs, LoginUser} from "@/services/actions/LoginUser";
import {storeUserInfo} from "@/services/auth.services";
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
import {useRouter} from "next/navigation";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "sonner";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<LoginInputs>();
  const password = watch("password");
  const onSubmit: SubmitHandler<LoginInputs> = async data => {
    console.log(data);

    try {
      const res = await LoginUser(data);
      console.log(res);
      if (res?.data?.token) {
        toast.success(res?.message);
        storeUserInfo(res?.data?.token);

        router.push("/");
        router.refresh();
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
            maxWidth: 600,
            width: "100%",
            borderRadius: "5px",
            boxShadow: 1,
            backgroundColor: "secondary.light",
            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          <Typography
            textAlign="center"
            variant="h6"
            color="primary.main"
            component="span"
            fontWeight={"bold"}
          >
            Please <Box component="span">Log</Box>
            <Box color="black" component="span">
              in To Use!
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
                <TextField
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
                  label="Password"
                  variant="standard"
                  type="password"
                  fullWidth={true}
                  {...register("password")}
                />
              </Grid>
              <Grid item xs={12} textAlign="center"></Grid>
            </Grid>
            <Button
              // textAlign="center"
              sx={{
                width: "200px",
                textAlign: "center",
                marginBottom: 5,
              }}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
