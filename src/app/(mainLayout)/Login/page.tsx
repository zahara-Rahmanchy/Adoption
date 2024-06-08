"use client";
import {LoginInputs} from "@/interfaces/LoginInputs";
import {LoginUser} from "@/services/actions/LoginUser";
import {storeUserInfo} from "@/services/auth.services";
// import {storeUserInfo} from "@/services/actions/auth.services";
import {
  Backdrop,
  Box,
  Button,
  ButtonBase,
  CircularProgress,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "sonner";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = async data => {
    setLoading(true);
    console.log(data);

    try {
      const res = await LoginUser(data);
      console.log(res);
      if (res?.data?.token) {
        storeUserInfo(res.data.token);
        router.push("/");
        router.refresh();
        toast.success(res?.message);
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.log(err);
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
        <Backdrop
          sx={{color: "#fff", zIndex: theme => theme.zIndex.drawer + 1}}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
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
                  {...register("email", {
                    required: "Email is required!",
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs m-1">
                    {errors.email.message}
                  </span>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                  fullWidth={true}
                  {...register("password", {
                    required: "Password is required!",

                    minLength: {
                      value: 6,
                      message: "Password must be least of 6 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be at most of 12 characters",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs m-1">
                    {errors.password.message}
                  </span>
                )}
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
