"use client";
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
import {Form, SubmitHandler, useForm} from "react-hook-form";
import RegisterUser from "@/services/actions/RegisterUser";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
type Inputs = {
  name: string;
  email: string;
  password: string;
  conpassword: string;
};
const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>();
  const password = watch("password");
  const onSubmit: SubmitHandler<Inputs> = async data => {
    console.log(data);
    const {conpassword, ...userInfo} = data;
    console.log(userInfo);
    try {
      const res = await RegisterUser(userInfo);
      console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        router.push("/Login");
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
                  type="text"
                  label="Username"
                  variant="standard"
                  fullWidth={true}
                  {...register("name")}
                />
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
                  label="Password"
                  variant="standard"
                  type="password"
                  fullWidth={true}
                  {...register("password")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Confirm Password"
                  variant="standard"
                  type="password"
                  fullWidth={true}
                  {...register("conpassword", {
                    required: "Confirm Password is Required",
                    validate: value =>
                      value === password ||
                      "The passwords do not match! Check properly",
                  })}
                />
                {errors.conpassword && (
                  <span className="text-red-500 text-xs m-1">
                    {errors.conpassword.message}
                  </span>
                )}
              </Grid>
            </Grid>
            <Button
              sx={{
                marginBottom: 5,
                width: "200px",
                textAlign: "center",
                backgroundColor: "secondary.dark",
              }}
              type="submit"
            >
              Register
            </Button>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
